(function () {
    'use strict';
    angular.module('mainApp').controller('defaultCtrl', ['$scope', '$http', '$state',
        '$sails','$rootScope', function ($scope, $http, $state,
                $sails, $rootScope) {

            $sails.on('connect', function (result) {
                //console.log("connection started :)");
            });

        }])
})();