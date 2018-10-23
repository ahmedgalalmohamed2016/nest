(function () {
    'use strict';
    angular.module('mainApp')
            .controller('clinicsCtrl', ['$scope', '$http', '$stateParams', '$state', 'ngNotify', 'AuthService',
                function ($scope, $http, $stateParams, $state, ngNotify, AuthService) {
                    $scope.myModel = {};

                    if (!AuthService.AuthUser())
                        $state.go('login');

                    findClinic();
                    function findClinic() {
                        $scope.loading = true;
                        $http({
                            method: "POST",
                            data: {userDevice: localStorage.userDevice,
                                mauth: localStorage.mauth},
                            url: "/api/user/clinicsList"
                        }).then(function mySuccess(response) {
                            $scope.loading = false;
                            if (response.data.statusCode == 301) {
                                localStorage.removeItem("mauth");
                                localStorage.removeItem("userDevice");
                                $state.go('login');
                            } else if (response.data.statusCode == 200) {
                                $scope.myClinics = response.data.data;
                            } else {
                                ngNotify.set(response.data.message, {type: 'error', theme: 'pitchy'});
                            }
                        }, function myError(response) {
                            ngNotify.set("Can't reach the movoclinic network", {type: 'error', theme: 'pitchy'});
                            $scope.loading = false;
                        });
                    }

                    $scope.manageClinic = function (id) {
                        $state.go('updateClinic', {id: id});
                    }
                    
                    $scope.addPhysician = function (id) {
                        $state.go('addPhysician', {id: id});
                    }

                }])
})();