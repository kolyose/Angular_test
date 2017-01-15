angular.module('blog')
.component('articleDetails', {
    templateUrl: "articleDetails.html",
    controller(){
        this.ok = () => {
            this.close();
        }
        this.cancel = () => {
            this.dismiss();
        }
    },    
    bindings: {
        data: '<'
    }
})