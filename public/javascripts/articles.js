angular.module('articles', ['ui.bootstrap'])

.service('articlesService', ArticlesService)

.component('articles', {
    templateUrl: 'articles.html',
    $routeConfig: [
        {path: '/', name: 'ArticleList', component: 'articleList', useAsDefault: true},
        {path: '/:id', name: 'ArticleDetails', component: 'articleDetails'}
    ]
})

.component('articleList', {
    templateUrl: "articleList.html",
    controller(articlesService, $uibModal){    
        const $ctrl = this;

        this.$routerOnActivate = (next) => {
            return articlesService.getArticles().then(articles => {
                $ctrl.articles = articles;

                const deleteId = next.params.deleteId;
                if (deleteId) this.deleteArticleById(deleteId);
            });
        }

        this.deleteArticleById = id => {
            for (let i=0, length=$ctrl.articles.length; i<length; i++){
                if ($ctrl.articles[i].id == id){
                     $ctrl.articles.splice(i, 1);
                    break;
                }
            }
        }

        this.addArticle = () => {
            let modalInstance = $uibModal.open({
                component: 'addArticle'
            });

            modalInstance.result.then(
                (data) => {
                    data.id = 0;
                    const length = $ctrl.articles.length;
                    if (length > 0){
                        data.id = $ctrl.articles[$ctrl.articles.length-1].id + 1;
                    }                    
                    $ctrl.articles.push(data);
                }, 
                (err) => {
                    console.error(err);
                }
            );
        }
    }
})

.component('articleDetails', {
    templateUrl: "articleDetails.html",
    controller(articlesService){
        const $ctrl = this;

        this.$routerOnActivate = (next) => {
            this.id = next.params.id;
            
            articlesService.getArticleById(this.id).then(article => {                
                $ctrl.article = article;
            });
        }   

        this.delete = () => {
           this.$router.navigate(['ArticleList', {deleteId: this.id}]);
        } 
    },
    bindings: {
        $router: '<' 
    }
});

function ArticlesService($q){
    let articlesPromise = $q.resolve([
        {id:1, title: `Article #1`, description: "Hello, I'm an article number one! And I'm very interesting one."},
        {id:2, title: `Article number two`, description: "Hi there! I'm much more intteresting article than the first one! Just try me ;)"}
    ]);

    this.getArticles = () => {
        return articlesPromise;
    }

    this.getArticleById = (id) => {
        return articlesPromise.then(articles => {           
            for (let article of articles){             
                if (article.id === id) return article;
            }
        });
    }
}