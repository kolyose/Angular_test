angular.module('blog', ['ui.bootstrap'])
.component('blog', {
    template: `<record-list></record-list>
                <hr>
                <button type= "button" class="btn btn-default" ng-click="$ctrl.openAuth()">Add article</button>`,
    controller($uibModal){    

        const $ctrl = this;
        $ctrl.data = "hello!"

        $ctrl.openAuth = () => {
            let modalInstance = $uibModal.open({
                component: 'authModal',
                resolve: {
                    data: function () {
                        return $ctrl.data;
                    }
                }
            });

            modalInstance.result.then(
                () => {console.log("resolved")}, 
                () => {console.log("rejected")}
            );
        }
    }                
})
.component('recordList', {
    templateUrl: "recordList.html",
    controller($scope){
        this.records = [
            {title: `Record!!`, description: "Record1 description"},
            {title: `Hi, I'm a record 2!`, description: "I'm better than first one"}
        ];

        this.addRecord = newRecord => this.records.push(newRecord); 
        this.removeRecord = record => this.records.push(newRecord);
    }
})
.component('record', {
    templateUrl: "record.html",
    controller(){
        this.delete = () => this.onDelete(this.data);
    },
    bindings: {
        data: '=',
        onDelete: '&'
    }
})
.component('authModal', {
    templateUrl: "authModal.html",
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