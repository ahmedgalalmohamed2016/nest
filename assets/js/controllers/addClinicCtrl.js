(function () {
    'use strict';
    angular.module('mainApp')
            .controller('addClinicCtrl', ['$scope', '$http', '$stateParams', '$state', 'ngNotify', 'AuthService',
                function ($scope, $http, $stateParams, $state, ngNotify, AuthService) {
                    $scope.myModel = {};

                    if (!AuthService.AuthUser())
                        $state.go('login');
                    $scope.submitForm = function () {
                        $scope.loading = true;
                        $("#btnSubmit").attr("disabled", true);
                        $http({
                            method: "POST",
                            data: {userDevice: localStorage.userDevice,
                                mauth: localStorage.mauth,
                                clinicName: $scope.clinicName,
                                Address: $scope.clinicAddress,
                                PhoneNumber: $scope.ClinicPhoneNumber},
                            url: "/api/user/createClinic"
                        }).then(function mySuccess(response) {
                            console.log(response)
                            $scope.loading = false;
                            if (response.data.statusCode == 301) {
                                localStorage.removeItem("mauth");
                                localStorage.removeItem("userDevice");
                                $state.go('login');
                            } else if (response.data.statusCode == 200) {
                                ngNotify.set(response.data.message, {type: 'default', theme: 'pitchy'});
                                $state.go('clinics');
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

