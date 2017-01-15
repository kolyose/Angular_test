angular.module('blog')
.component('record', {
    templateUrl: "record.html",
    controller(){
        console.log(this);
        this.delete = () => this.onDelete(this.data);
    },
    bindings: {
        data: '=',
        onDelete: '&'
    }
})