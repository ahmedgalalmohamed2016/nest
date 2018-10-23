(function () {
    'use strict';
    angular.module('mainApp')
            .controller('registerCtrl', ['$scope', '$http', '$stateParams', '$state', 'ngNotify', 'AuthService',
                function ($scope, $http, $stateParams, $state, ngNotify, AuthService) {
                    $scope.myModel = {};
                    $scope.noNetwork = false;
                    $scope.error = false;

                    if (AuthService.AuthUser())
                        $state.go('dashboard');

                    function registerUser() {
                        $http({
                            method: "POST",
                            data: {mobileNumber: $scope.myModel.mobileNumber
                                , password: $scope.myModel.password
                                , firstName: $scope.myModel.firstName
                                , lastName: $scope.myModel.lastName
                                , type: "web"},
                            url: "/api/user/register"
                        }).then(function mySuccess(response) {
                            $("#btnSubmit").attr("disabled", false);
                            if (response.data.statusCode == 200) {
                                localStorage.mauth = response.data.data.token;
                                localStorage.userDevice = response.data.data.userDevice;
                                ngNotify.set("welcome doctor " + $scope.myModel.firstName + " " + $scope.myModel.lastName, {type: 'default', theme: 'pitchy'});
                                $state.go('dashboard');
                            } else {
                                localStorage.removeItem("mauth");
                                localStorage.removeItem("userDevice");
                                $scope.error = true;
                                ngNotify.set(response.data.message, {type: 'error', theme: 'pitchy'});
                            }
                        }, function myError(response) {
                            ngNotify.set("Can't reach the movoclinic network", {type: 'error', theme: 'pitchy'});
                            $scope.error = true;
                            $scope.errorData = "Failed -Please Check Internet Connection";
                        })
                    }

                    $scope.submitForm = function () {
                        $("#btnSubmit").attr("disabled", true);
                        registerUser();
                    }

                    $scope.login = function () {
                        $state.go('login')
                    }

                }])
})();