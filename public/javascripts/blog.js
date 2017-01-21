angular.module('blog')
.component('blog', {
    templateUrl: 'blog.html',
    $routeConfig: [
        {path: '/articles/...', name:'Articles', component:'articles', useAsDefault: true},
        {path: '/auth', name:'Auth', component:'auth'}
    ]/*,
    controller($uibModal){    
        this.articles = [
            {title: `Record!!`, description: "Record1 description"},
            {title: `Hi, I'm a record 2!`, description: "I'm better than first one"}
        ];

        this.addArticle = () => {
            let modalInstance = $uibModal.open({
                component: 'addArticle'
            });

            modalInstance.result.then(
                (data) => {
                    this.articles.push(data);
                }, 
                (err) => {
                    console.error(err);
                }
            );
        }
    }  */              
})