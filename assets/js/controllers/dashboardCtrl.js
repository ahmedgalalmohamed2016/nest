(function () {
    'use strict';
    angular.module('mainApp')
            .controller('dashboardCtrl', ['$scope', '$http', '$stateParams', '$state', 'ngNotify', 'AuthService',
                function ($scope, $http, $stateParams, $state, ngNotify, AuthService) {
                    $scope.myModel = {};
                  
                    if (!AuthService.AuthUser()){
                     ngNotify.set("You does not have authority to access this page", {type: 'warn', theme: 'pitchy'});
                        $state.go('index');
                    }

                }])
})();