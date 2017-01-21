angular.module('articles', [])

.service('articlesService', ArticlesService)

.component('artciles', {
    templateUrl: 'articles.html',
    $routeConfig: [
        {path: '/', name: 'ArticleList', component: 'articleList', useAsDefault: true},
        {path: '/:id', name: 'ArticleDetails', component: 'articleDetails'}
    ]
})

.component('articleList', {
    templateUrl: "articleList.html",
    controller(articlesService){    
        const $ctrl = this;

        $ctrl.$routerOnActivate = (next) => {
            return articlesService.getArticles().then(articles => {
                $ctrl.articles = articles;
            });
        }
    }
})

.component('articleDetails', {
    templateUrl: "articleDetails.html",
    controller(articlesService){
        const $ctrl = this;

        this.$routerOnActivate = (next) => {
            const id = next.params.id;
            this.onDelete = next.params.onDelete;
            
            articlesService.getArticleById(id).then(article => {
                $ctrl.article = article;
            });
        }   

        this.delete = () => {
            this.onDelete(this.article.id);
        } 
    }
});

function ArticlesService($q){
    let articlesPromise = $.resolve([
        {id:1, title: `Record!!`, description: "Record1 description"},
        {id:2, title: `Hi, I'm a record 2!`, description: "I'm better than first one"}
    ]);

    this.getArticles = () => {
        return articlesPromise;
    }

    this.getArticleById = (id) => {
        return articlesPromise.then(articles => {
            for (let article of articles){
                if (article === id) return article;
            }
        });
    }
}