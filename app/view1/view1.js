'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$rootScope',function($scope,$rootScope) {
    $scope.name = "Abhay";
    $rootScope.isActive = true;
    console.log("Rootscope: ",$rootScope);
}]);