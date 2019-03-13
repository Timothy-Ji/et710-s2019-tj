var app = angular.module('midtermPracticeApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl:'app/views/home.html'
  })
  .when('/works', {
    templateUrl:'app/views/works.html'
  })
  .when('/news', {
    templateUrl:'app/views/news.html'
  })
  .when('/contact', {
    templateUrl:'app/views/contact.html'
  })
});
