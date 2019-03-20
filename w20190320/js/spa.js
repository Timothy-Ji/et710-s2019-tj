var app = angular.module('et710app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/views/home.html'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  .when('/services', {
    templateUrl: 'app/views/services.html'
  })
  .when('/works', {
    templateUrl: 'app/views/works.html'
  })
  .when('/news', {
    templateUrl: 'app/views/news.html'
  })
  .when('/contact', {
    templateUrl: 'app/views/contact.html'
  })
});
