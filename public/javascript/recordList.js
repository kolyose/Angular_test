angular.module('blog', [])
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
});