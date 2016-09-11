// Declare app level module which depends on views, and components
(function(){
    angular.module('myApp', [
        'ngRoute',
        'myApp.version'
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/app'});
    }]);
})();
