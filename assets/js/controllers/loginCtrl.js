(function () {
    'use strict';
    angular.module('mainApp')
            .controller('loginCtrl', ['$scope', '$http', '$stateParams', '$state', 'ngNotify', 'AuthService',
                function ($scope, $http, $stateParams, $state, ngNotify, AuthService) {
                    $scope.myModel = {};

                    if (AuthService.AuthUser())
                        $state.go('dashboard');

                    function loginUser() {
                        $http({
                            method: "POST",
                            data: {mobileNumber: $scope.myModel.mobileNumber
                                , password: $scope.myModel.password,
                                type: "web"},
                            url: "/api/user/login"
                        }).then(function mySuccess(response) {
                            $("#btnSubmit").attr("disabled", false);
                            if (response.data.statusCode == 200) {

                                localStorage.mauth = response.data.data.token;
                                localStorage.userDevice = response.data.data.userDevice;
                                ngNotify.set("Welcome back doctor", {type: 'default', theme: 'pitchy'});
                                $state.go('dashboard');
                            } else {
                                ngNotify.set(response.data.message, {type: 'warn', theme: 'pitchy'});
                                localStorage.removeItem("mauth");
                                localStorage.removeItem("userDevice");
                                ngNotify.set(response.data.message, {type: 'warn', theme: 'pitchy'});

                            }
                        }, function myError(response) {
                            ngNotify.set("Can't reach the movoclinic network", {type: 'error', theme: 'pitchy'});
                        })
                    }

                    $scope.submitForm = function () {
                        $("#btnSubmit").attr("disabled", true);
                        loginUser();
                    }

                    $scope.login = function () {
                        $state.go('register');
                    }

                    $scope.forgetPassword = function () {
                        $state.go('forgetPassword');
                    }


                }])
})();
