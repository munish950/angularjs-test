/// <reference path="angular.js" />
/// <reference path="angular-route.min.js" />

var app = angular.module("myApp", ['ngRoute'])
.controller("contactDetailController", function($scope, $routeParams) {
    $scope.infoId = 'urlId';
});
