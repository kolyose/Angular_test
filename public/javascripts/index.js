angular.module('blog', ['ui.bootstrap', 'ngComponentRouter', 'articles', 'auth'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'blog')