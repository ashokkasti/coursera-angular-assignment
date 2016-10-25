(function () {
  'use strict';

  angular.module('MenuData')
  .component('items', {
    templateUrl: 'src/menudata/templates/items.template.js',
    bindings: {
      items: '<'
    }
  });
})();
