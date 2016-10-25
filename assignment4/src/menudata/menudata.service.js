(function () {
  'use strict';

  angular.module('MenuData')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'APIBasePath'];

  function MenuDataService ($http, APIBasePath) {
    var service = this;

    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (APIBasePath + "/categories.json")
      });
      return response;
    }

    service.getItemsForCategories = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: (APIBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });
      return response;
    }
  }

})();



