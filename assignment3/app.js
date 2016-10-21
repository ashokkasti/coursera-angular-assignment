(function () {

  'use strict';

  angular.module('RestaurantApp', [])
        .controller('NarrowDownController', NarrowDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('APIBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
        .directive('foundItems', foundItemsDirective);


  function foundItemsDirective () {
    var ddo = {
      templateUrl: 'menu_description.html',
      scope: {
        found: '=',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'controller',
      bindToController: true
    }
    return ddo;
  }

  function FoundItemsDirectiveController () {
    var controller = this;
  }

  // Controller
  NarrowDownController.$inject = ['MenuSearchService'];
  function NarrowDownController (MenuSearchService) {
    var controller = this;
    controller.searchTerm = "";

    controller.getMatchedMenuItems = function (term) {

      if (!term) {
        controller.message = "No items found :(";
        return false;
      } else {
        $('.menu-container').fadeOut();
        $('.loader').fadeIn();
        controller.message = false;

        var promise = MenuSearchService.getMatchedMenuItems();

        promise.then(function(response) {

          var original = response.data.menu_items,
              searchedItem = [];
          angular.forEach(original, function (item, k) {
            if (item.description.indexOf(term) >= 0 && item.description !== '') {
              searchedItem.push(item);
            } else {
              // Remove items not found
              original.splice(k,1);
            }
            controller.foundItems = searchedItem;
          });
          $('.menu-container').fadeIn();
          $('.loader').fadeOut();
        }, function(reason) {
          console.log('Error to connect to API.');
        });

      }
    }

    controller.removeItem = function (itemIndex) {
      controller.foundItems.splice(itemIndex, 1);
      if (!controller.foundItems.length) {
        controller.message = "Sorry no items :(";
      }
    }
  }


  // Service
  MenuSearchService.$inject = ['$http', 'APIBasePath'];
  function MenuSearchService ($http, APIBasePath) {

    var service = this;
    service.getMatchedMenuItems = function () {
      var response = $http({
        method: 'GET',
        url: APIBasePath
      });
      return response;
    }
  }

})();
