/**
 * Created by siaskov on 12/12/16.
 */

var productsApp = angular.module('productsApp', []);
productsApp.controller('ProductCtrl', function ($scope, $http){
    $http.get('products.json').success(function(data) {
        $scope.products = data;

        $scope.products.quantity = 1;


        console.log($scope.products);

    });


    $scope.quantityUp = function (product) {
        $scope.products.quantity++;
    };

    $scope.active = false;

    $scope.quantityDown = function (product) {

        if ($scope.products.quantity > 1) {
            $scope.products.quantity--;
        }

    };


});