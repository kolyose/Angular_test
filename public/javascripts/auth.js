angular.module('auth', [])

.service('authService', AuthService)

.component('auth', {
    templateUrl: 'auth.html',
    controller(authService){
        //authService.authorize();
        this.user = {}

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