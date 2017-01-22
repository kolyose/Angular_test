angular.module('auth', [])

.service('authService', AuthService)

.component('auth', {
    templateUrl: 'auth.html',
    controller(authService){
        authService.test();
    }
})

function AuthService(){
    
    this.test = () => {
        console.log('AuthService is working');
    }

    this.logout = () => {
        console.log('AuthService:logout()');
    }
}