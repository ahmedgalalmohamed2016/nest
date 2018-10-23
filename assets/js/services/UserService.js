mainApp.service('AuthService', ['$sails', '$rootScope',
    function ($sails, $rootScope) {

        this.AuthUser = function () {
            if (localStorage.mauth && localStorage.userDevice) {
                return true;
            } else {
                return false;
            }
        }

        this.UserData = function (callback) {
            if (localStorage.mauth) {
                $sails.post("/api/user/myData", {userDevice: $rootScope.userDevice
                    , mauth: localStorage.mauth})
                        .success(function (data, status, headers, jwr) {
                            if (data.statusCode == 404) {
                                localStorage.removeItem("mauth");
                                $rootScope.rootUserData = null;
                                return callback('login');
                            }
                            if (data.statusCode == 202) {
                                $rootScope.rootUserData = data.data;
                                console.log($rootScope.rootUserData);
                                return callback('verifyAccount');
                            }
                            if (data.statusCode == 200) {
                                $rootScope.rootUserData = data.data;
                                console.log($rootScope.rootUserData);
                                return callback(true);
                                //return true;
                            }
                        })
                        .error(function (data, status, headers, jwr) {
                            $rootScope.rootUserData = null;
                            return callback("login");
                        });
            } else {
                return callback("login");
            }
        }
    }
])

