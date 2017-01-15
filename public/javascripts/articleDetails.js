angular.module('blog')
.component('articleDetails', {
    templateUrl: "articleDetails.html",
    controller(){
        this.$onInit = () => {
            this.data = this.resolve.data;
        }

        this.ok = () => {
            this.close();
        }
        this.cancel = () => {
            this.dismiss();
        }
    },    
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
})