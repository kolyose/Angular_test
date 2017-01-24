angular.module('auth', [])

.service('authService', AuthService)
.directive('isEqualTo', isEqualTo)
.directive('validateEmailAsync', validateEmailAsync)

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

function validateEmailAsync(){
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModel){
            const fakeEmails = ['test@mail.ru', 'test'];
            ngModel.$asyncValidators.validateEmailAsync = function (modelValue, viewValue){
                return new Promise((resolve, reject) => {                  
                    setTimeout(() => {
                        if (fakeEmails.indexOf(modelValue) > -1){
                            return reject(new Error("Email is already taken!"));
                        }
                        resolve(true);
                    }, 1000);
                });
            }
        }
    }
}