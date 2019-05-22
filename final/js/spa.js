var app = angular.module('et710App',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      controller:'HomeController',
      templateUrl: 'app/views/home.html'
    })
  .when('/works',
    {
      controller: 'WorksController',
      templateUrl: 'app/views/works.html'
    })
    .when('/news',
      {
        controller: 'NewsController',
        templateUrl: 'app/views/news.html'
      })
   .when('/contact',
      {
        controller: 'ContactController',
        templateUrl: 'app/views/contact.html'
      })
   .when('/about',
      {
        controller: 'AboutController',
        templateUrl: 'app/views/about.html'
      })
  .when('/services',
     {
       controller: 'ServicesController',
       templateUrl: 'app/views/services.html'
     })
});
