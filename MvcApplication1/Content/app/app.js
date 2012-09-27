'use strict';

// giving content path is necessary becauseit is hosted with webAPI
var partialsDir = 'Content/partials/';

//var One23SRCApp = angular.module('One23SRCApp', ['One23SRCApp.API']);
var myApp = angular.module('myApp', []);
//binding of controller, view and URL.

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/Grid', { templateUrl: partialsDir + 'Grid.html', controller: GridController });
    $routeProvider.when('/Index', { templateUrl: partialsDir + 'Index.html' });
    $routeProvider.otherwise({ redirectTo: '/Default' });

}]);