// Declare app level module which depends on views, and components
(function(){
    angular.module('myApp', [
        'ui.bootstrap',
        'myApp.user',
        'ngRoute',
        'myApp.version'
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/app'});
    }]);
})();
