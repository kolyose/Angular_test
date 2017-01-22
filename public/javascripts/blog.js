angular.module('blog')
.component('blog', {
    templateUrl: 'blog.html',
    $routeConfig: [
        {path: '/articles/...', name:'Articles', component:'articles', useAsDefault: true},
        {path: '/auth', name:'Auth', component:'auth'}
    ],
    controller(authService){    

        this.isAuthorized = authService.isAuthorized;

        this.logout = () =>{
           authService.logout();
        }
    }             
})