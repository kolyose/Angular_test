angular.module('blog')
.component('articleList', {
    templateUrl: "articleList.html",
    controller(){       
         this.viewArticle = (data) => {
           this.onViewArticle({data});
        }
        this.deleteArticle = (data) => {
            const index = this.articles.indexOf(data);
            if (~index) this.articles.splice(index,1);
        }
    },
    bindings: {
        articles: '=',
        onView: '&'
    }
})