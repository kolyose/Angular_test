angular.module('blog')
.component('blog', {
    templateUrl: 'blog.html',
    controller($uibModal){    
        this.editArticle = (articleData) => {
            let modalInstance = $uibModal.open({
                component: 'articleDetails',
                resolve: {
                    data: function () {
                        return articleData;
                    }
                }
            });

            modalInstance.result.then(
                () => {console.log("resolved")}, 
                () => {console.log("rejected")}
            );
        }
    }                
})