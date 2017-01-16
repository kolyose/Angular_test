angular.module('blog')
.component('articleDetails', {
    templateUrl: "articleDetails.html",
    controller(){     
        this.ok = () => {
            this.close({$value:{title: this.title, description:this.description}});
        }

        this.isSaveAllowed = () => {
            return (this.title != undefined) && (this.title != ""); 
        }
    },    
    bindings: {
        close: '&'
    }
})