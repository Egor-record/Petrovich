/**
 * Created by siaskov on 12/12/16.
 */

var productsApp = angular.module('productsApp', []);

productsApp.controller('ProductCtrl', function ($scope, $http){
    $http.get('products.json').success(function(data) {
        $scope.products = data;

    });

    $scope.quantityDown = function (product) {

        if ($scope.products.quantity > 1) {
            $scope.products.quantity--;
        }

    };

}).directive("down", function(){

   return function(scope, element) {
       element.bind("click", function(){
           var count = this.parentNode.childNodes[0].nextSibling.value;

           if (count > 1) {
               count--;
           }

           this.parentNode.childNodes[0].nextSibling.value = count;
           var packaging = (parseInt(count) * 2.47).toFixed(2);

           this.parentNode.parentNode.parentNode.parentNode.children[10].querySelector('.unit--infoInn').innerHTML = count + " упак. = " + packaging + " м. кв.";

       })
   }
}).directive("up", function(){

    return function(scope, element) {
        element.bind("click", function(){
            var count = this.parentNode.childNodes[0].nextSibling.value;

            count++;

            this.parentNode.childNodes[0].nextSibling.value = count;
            var packaging = (parseInt(count) * 2.47).toFixed(2);

            this.parentNode.parentNode.parentNode.parentNode.children[10].querySelector('.unit--infoInn').innerHTML = count + " упак. = " + packaging + " м. кв.";


        })
    }
}).directive("topackaging", function(){

    return function(scope, element) {
        element.bind("click", function(){

            var unitGold = this.parentNode.parentNode.parentNode.children[6].querySelector('.goldPrice').getAttribute('data-unit-price')
                unit = this.parentNode.parentNode.parentNode.children[7].querySelector('.retailPrice').getAttribute('data-unit-price');
            this.parentNode.parentNode.parentNode.children[6].querySelector('.goldPrice').innerHTML = unitGold;
            this.parentNode.parentNode.parentNode.children[7].querySelector('.retailPrice').innerHTML = unit;

        })
    }
}).directive("tometer", function(){

    return function(scope, element) {
        element.bind("click", function(){

            var unitGold = this.parentNode.parentNode.parentNode.children[6].querySelector('.goldPrice').getAttribute('data-default-price')
            unit = this.parentNode.parentNode.parentNode.children[7].querySelector('.retailPrice').getAttribute('data-default-price');
            this.parentNode.parentNode.parentNode.children[6].querySelector('.goldPrice').innerHTML = unitGold;
            this.parentNode.parentNode.parentNode.children[7].querySelector('.retailPrice').innerHTML = unit;

        })
    }
});


