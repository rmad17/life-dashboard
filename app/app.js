// Declare app level module which depends on views, and components
(function(){
    angular.module('myApp', [
        'ui.bootstrap',
        'ngRoute',
        'myApp.version'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/details', {
                templateUrl: 'app/user/details.html',
                controller: 'goals',
            })
            .otherwise({redirectTo: '/app'});
    }]);
})();
