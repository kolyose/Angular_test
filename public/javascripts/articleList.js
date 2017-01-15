angular.module('blog')
.component('articleList', {
    templateUrl: "articleList.html",
    controller(){
        this.articles = [
            {id: 1, title: `Record!!`, description: "Record1 description"},
            {id: 2, title: `Hi, I'm a record 2!`, description: "I'm better than first one"}
        ];
         this.editArticle = (data) => {
           this.onEditArticle({data});
        }
        this.deleteArticle = (data) => {
            const index = this.articles.indexOf(data);
            if (~index) this.articles.splice(index,1);
        }
    },
    bindings: {
        onEditArticle: '&'
    }
})