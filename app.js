angular.module('rainingCatzAndDogz', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: "./templates/homeTemp.html"
  })
  .state('catz', {
      url: '/catz',
      controller: 'catCtrl',
      templateUrl: './templates/catzTemp.html'
  })
  .state('dogz', {
      url: '/dogz',
      controller: 'dogCtrl',
      templateUrl: './templates/dogzTemp.html'
  })
  .state('cat',{
      url: '/catz/:id',
      controller: 'catCtrl',
      templateUrl: './templates/catTemp.html'
  })
  .state('dog', {
      url: '/dogz/:id',
      controller: 'dogCtrl',
      templateUrl: './templates/dogTemp.html'
  })

  $urlRouterProvider
  .otherwise('/');
});
