(function () {
    'use strict';
    angular.module('mainApp').controller('headerCtrl', ['$scope', '$http', '$state',
        '$sails', '$rootScope', 'AuthService',
        function ($scope, $http, $state, $sails, $rootScope, AuthService) {

            if (AuthService.AuthUser())
                $scope.loginStatus = true;
            else if (!AuthService.AuthUser())
                $scope.loginStatus = false;

            $scope.logOut = function () {
                localStorage.removeItem("mauth");
                localStorage.removeItem("userDevice");
                $scope.loginStatus = false;
                $state.go('index');
            }
           

        }])
})();