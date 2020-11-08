// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
console.log('its work');

(function () {
  window.dataBase = {
    getProductById(id) {
      return this.products[id]
    }
  }
})();
