(function () {
    'use strict';
    angular.module('mainApp')
            .controller('addPhysicianCtrl', ['$scope', '$http', '$stateParams', '$state', 'ngNotify', 'AuthService',
                function ($scope, $http, $stateParams, $state, ngNotify, AuthService) {
                    $scope.myModel = {};

                    if (!AuthService.AuthUser())
                        $state.go('login');

                   
                    findClinic();
                    function findClinic() {
                        console.log("params : " + $stateParams.id);
                        $scope.loading = true;
                        $http({
                            method: "POST",
                            data: {userDevice: localStorage.userDevice,
                                mauth: localStorage.mauth,
                                clinicId: $stateParams.id},
                            url: "/api/user/clinicDetails"
                        }).then(function mySuccess(response) {
                            // console.log(response.data.data)
                            $scope.loading = false;
                            if (response.data.statusCode == 301) {
                                localStorage.removeItem("mauth");
                                localStorage.removeItem("userDevice");
                                $state.go('login');
                            } else if (response.data.statusCode == 200) {
                                $scope.clinicData = response.data.data;
                            } else {
                                ngNotify.set(response.data.message, {type: 'error', theme: 'pitchy'});
                                $state.go('clinics');
                            }
                        }, function myError(response) {
                            ngNotify.set("Can't reach the movoclinic network", {type: 'error', theme: 'pitchy'});
                            $scope.loading = false;
                        });
                    }
                    $scope.submitForm = function () {
                        $scope.loading = true;
                        //$("#btnSubmit").attr("disabled", true);
                        console.log("m" + $scope.myModel.mobileNumber)
                        $http({
                            method: "POST",
                            data: {userDevice: localStorage.userDevice,
                                mauth: localStorage.mauth,
                             mobileNumber: $scope.myModel.mobileNumber},
                            url: "/api/finddoctor"
                        }).then(function mySuccess(response) {
                            console.log(response)
                            $scope.loading = false;
                            if (response.data.statusCode == 301) {
                                localStorage.removeItem("mauth");
                                localStorage.removeItem("userDevice");
                                $state.go('login');
                            } else if (response.data.statusCode == 200) {
                                console.log(response.data.data)
                            } else {
                                ngNotify.set(response.data.message, {type: 'error', theme: 'pitchy'});
                            }
                        }, function myError(response) {
                            ngNotify.set("Can't reach the movoclinic network", {type: 'error', theme: 'pitchy'});
                            $scope.loading = false;
                        });
                    }




                }])
})();

