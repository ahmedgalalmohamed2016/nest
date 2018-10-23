(function () {
    'use strict';
    angular.module('mainApp').controller('feedsCtrl', ['$scope', '$http', '$state',
        '$rootScope', function ($scope, $http, $state, $rootScope) {
            $scope.loading = true;
            $http({
                method: "GET",
                url: "/api/rss"
            }).then(function mySuccess(response) {
                console.log(response.data.data.result);
                if (response.data.data.result && response.data.data.result.length > 0) {
                    $scope.rssdata = response.data.data.result;
                    $scope.rssdataTotal = response.data.data.result.length;
                } else {
                }
                $scope.loading = false;

            }, function myError(response) {
//                ngNotify.set("Can't reach the movoclinic network", {type: 'error', theme: 'pitchy', sticky: true});
                console.log(response);
                $scope.loading = false;
            });


        }])
})();