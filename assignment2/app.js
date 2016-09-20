(function () {
  'use strict';

  angular.module('ShoppingApp', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);



  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController (ShoppingListCheckOffService) {
    var list = this;
    list.items = ShoppingListCheckOffService.getToBuyItems();

    list.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }


  function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
    var list = this;
    list.items = ShoppingListCheckOffService.getBoughtItems();

  }

  // Shopping List Service
  function ShoppingListCheckOffService() {

    var service = this;

    var tobuy_items = [
      {name: "cookie", quantity: 10},
      {name: "pepsi", quantity: 2},
      {name: "red bull", quantity: 5},
      {name: "chips", quantity: 2},
      {name: "beer", quantity: 10}
    ];

    var bought_items = [];

    service.buyItem = function (itemIndex) {
      bought_items.push(tobuy_items.splice(itemIndex, 1)[0]);
    };

    service.getBoughtItems = function () {

      return bought_items;
    };

    service.getToBuyItems = function () {
      return tobuy_items;
    };
  }

  function ShoppingListCheckOffServiceProvider () {
    var provider = this;
    provider.$get = function () {
      var shoppingList = new ShoppingListCheckOffService();
      return shoppingList;
    }
  }



})();
