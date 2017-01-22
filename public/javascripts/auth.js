angular.module('auth', [])

.service('authService', AuthService)
.directive('isEqualTo', isEqualTo)

.component('auth', {
    templateUrl: 'auth.html',
    controller(authService){
        
        this.login = {user:{}};
        this.registration = {user:{}};

        this.login = () => {
            console.log("login")
        }

        this.register = () => {
            console.log("register")
        }
    }
})

function AuthService(){

    this.authorized = false;

    this.isAuthorized = () => {
        return this.authorized;
    }

    this.authorize = () => {
        this.authorized = true;
    }

    this.logout = () => {
        this.authorized = false;
    }
}

function isEqualTo(){
    return {
        require: 'ngModel',
        scope: {
            isEqualTo: '='
        },
        link: function (scope, elem, attrs, ngModel){
            ngModel.$validators.isEqualTo = function (modelValue, viewValue){
                const result = (modelValue == scope.isEqualTo);
                return result;
            }

            scope.$watch('isEqualTo', function(){
                ngModel.$validate();
            });
        }
    }
}