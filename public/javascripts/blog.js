angular.module('blog')
.component('blog', {
    templateUrl: 'blog.html',
    controller($uibModal){    

        const $ctrl = this;
        $ctrl.data = "hello!"

        $ctrl.addArticle = () => {
            let modalInstance = $uibModal.open({
                component: 'articleDetails',
                resolve: {
                    data: function () {
                        return $ctrl.data;
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