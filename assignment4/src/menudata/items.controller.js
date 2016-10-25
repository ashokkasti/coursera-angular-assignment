(function () {
  'use strict';

  angular.module('MenuData')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', '$stateParams'];

  function ItemsController(MenuDataService, $stateParams) {
    var mainlist = this,
        promise = MenuDataService.getItemsForCategories($stateParams.catId);

    promise.then(function (response) {
      mainlist.items = response.data;
    })
    .catch(function (error) {
      console.log("Error while loading items list");
    });

  }
})();
