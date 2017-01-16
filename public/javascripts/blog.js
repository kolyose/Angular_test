angular.module('blog')
.component('blog', {
    templateUrl: 'blog.html',
    controller($uibModal){    
        this.articles = [
            {title: `Record!!`, description: "Record1 description"},
            {title: `Hi, I'm a record 2!`, description: "I'm better than first one"}
        ];

        this.addArticle = () => {
            let modalInstance = $uibModal.open({
                component: 'articleDetails'
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
    }                
})