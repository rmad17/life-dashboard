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

        $scope.goals = {};
        $scope.logged = false;

        function forceUpdate() {
            setTimeout(function () {
                $scope.$apply(function () {
                    console.log('Forced Update');
                });
            }, 2000);
        }

        function getGoals(){
            var url = base_url + $scope.user.username + '/goals/';
            var token = 'Token ' + sessionStorage.getItem('token');
            var headers = {headers: {'Authorization': token}};
            $http.get(url, headers)
                .success(function (data, status, headers, config) {
                    $scope.goals = data.data;
                    $scope.first_name = data.data.first_name;
                    $scope.logged = true;
                })
                .error(function (data, status, header, config) {
                    console.log("error:" , data);
                });
        }

        $scope.register = function(){
            var url = base_url + 'register/';
            var data = $scope.user;
            $http.post(url, data)
                .success(function (data, status, headers, config) {
                    sessionStorage.setItem('token', data.token);
                    var loginDiv = document.getElementById('login');
                    var registerDiv = document.getElementById('register');
                    loginDiv.style.display = 'block';
                    registerDiv.style.display = 'none';
                    getGoals();
                })
                .error(function (data, status, header, config) {
                    console.log("error:" , data);
                });
        };

        $scope.login = function(){
            var url = base_url + 'login/';
            var data = $scope.user;
            $http.post(url, data)
                .success(function (data, status, headers, config) {
                    sessionStorage.setItem('token', data.token);
                    getGoals();
                    var authDiv = document.getElementById('authDiv');
                    var userDiv = document.getElementById('userDiv');
                    userDiv.style.display = 'block';
                    authDiv.style.display = 'none';
                    forceUpdate();
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
    .controller('userController', function($rootScope, $scope, $http) {
        console.log("Controller");
        function getGoals(){
            var url = base_url + $scope.user.username + '/goals/';
            var token = 'Token ' + sessionStorage.getItem('token');
            var headers = {headers: {'Authorization': token}};
            $http.get(url, headers)
                .success(function (data, status, headers, config) {
                    $scope.goals = data;
                    console.log('dat:',data);
                })
                .error(function (data, status, header, config) {
                    console.log("error:" , data);
                });
        }
        if($scope.user){
            getGoals();
        }
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
