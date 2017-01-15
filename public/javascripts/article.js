angular.module('blog')
.component('article', {
    templateUrl: "article.html",
    controller(){
        this.delete = () => this.onDelete(this.data);
    },
    bindings: {
        data: '=',
        onDelete: '&'
    }
})