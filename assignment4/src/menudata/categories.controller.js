(function () {
  'use strict';

  angular.module('MenuData')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService'];

  function CategoriesController (MenuDataService) {
    var mainlist = this;

    var promise = MenuDataService.getAllCategories();

    promise.then(function (response) {
      mainlist.categories = response.data;
    })
    .catch(function (error) {
      console.log("Some error while getting categories :(");
    })

  }

})();
