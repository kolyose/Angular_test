angular.module('auth', [])

.service('authService', AuthService)
.directive('isEqualTo', isEqualTo)
.directive('validateEmailAsync', validateEmailAsync)

.component('auth', {
    templateUrl: 'auth.html',
    controller(authService){
        
        this.isAuthenticating = false;
        this.login = {user:{}};
        this.registration = {user:{}};

        this.login = () => {
            this.isAuthenticating = true;
            console.log("login")
        }

        this.register = () => {
            this.isAuthenticating = true;
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
                return (ngModel.$isEmpty(modelValue) && ngModel.$isEmpty(scope.isEqualTo)) || (modelValue === scope.isEqualTo);
            }
            scope.$watch('isEqualTo', function(){
                ngModel.$validate();
            });
        }
    }
}

function validateEmailAsync(){
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModel){
            const fakeEmails = ['test@mail.ru', 'test'];
            ngModel.$asyncValidators.validateEmailAsync = function (modelValue, viewValue){
                return new Promise((resolve, reject) => {                  
                    setTimeout(() => {
                        if (~fakeEmails.indexOf(modelValue)){
                            return reject(new Error("Email is already taken!"));
                        }
                        resolve(true);
                    }, 1000);
                });
            }
        }
    }
}