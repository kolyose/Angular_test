angular.module('blog')
.component('article', {
    templateUrl: "article.html",
    controller(){
         this.view = () => {
            this.onView({data:this.data});
        }
        this.delete = () => {
            this.onDelete({data:this.data});
        }
    },
    bindings: {
        data: '=',
        onView: '&',
        onDelete: '&'
    }
})