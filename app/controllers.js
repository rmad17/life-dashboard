/*
 * controllers.js
 * Copyright (C) 2016 rmad17 <souravbasu17@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
(function(){
    'use strict';

    var base_url = 'http://localhost:8000/';

    var myApp = angular.module('myApp');
    myApp
    .controller('auth', function($rootScope, $scope, $http) {

        $scope.register = function(){
            var url = base_url + 'register/';
            console.log("data:" , $scope);
            var data = $scope.user;
            $http.post(url, data)
                .success(function (data, status, headers, config) {
                    console.log("success:" , data.data);
                    $window.sessionStorage.token = data.token;
                })
                .error(function (data, status, header, config) {
                    console.log("error:" , data);
                });
        };

        $scope.showLogin = function(state){
            var loginDiv = document.getElementById('login');
            var registerDiv = document.getElementById('register');
            if(state){
                loginDiv.style.display = 'block';
                registerDiv.style.display = 'none';
            }
            else{
                loginDiv.style.display = 'none';
                registerDiv.style.display = 'block';
            }
        };
    })
    .controller('goals', function($rootScope, $scope, $http) {
        console.log("Controller");
        $scope.register = function(){
            var url = base_url + 'register/';
            $http.post(url, data)
                .success(function (data, status, headers, config) {
                    console.log("success:" , data.data);
                })
                .error(function (data, status, header, config) {
                    console.log("error:" , data);
                });
        };
    });
})();
