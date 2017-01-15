angular.module('blog')
.component('article', {
    templateUrl: "article.html",
    controller(){
         this.edit = () => {
            this.onEdit({data:this.data});
        }
        this.delete = () => {
            this.onDelete({data:this.data});
        }
    },
    bindings: {
        data: '=',
        onEdit: '&',
        onDelete: '&'
    }
})