(function () {
    'use strict';
    angular.module('mainApp')
            .controller('updateClinicCtrl', ['$scope', '$http', '$stateParams', '$state', 'ngNotify', 'AuthService',
                function ($scope, $http, $stateParams, $state, ngNotify, AuthService) {
                    $scope.myModel = {};

                    if (!AuthService.AuthUser())
                        $state.go('login');

                }])
})();