angular.module('blog')
.component('articleList', {
    templateUrl: "articleList.html",
    controller($scope){
        this.articles = [
            {title: `Record!!`, description: "Record1 description"},
            {title: `Hi, I'm a record 2!`, description: "I'm better than first one"}
        ];
    }
})