(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      controller: 'CategoriesController as catList',
      templateUrl: 'src/menudata/templates/categories.template.html'
    })

    .state('categories.items', {
      url: '/categories/{catId}',
      controller: "ItemsController as itemList",
      templateUrl: 'src/menudata/templates/items.template.html'
    })
    ;
  }

})();
