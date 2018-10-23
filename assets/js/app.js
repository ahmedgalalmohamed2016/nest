var mainApp = angular.module('mainApp', ['ui.router', 'ngSanitize', 'ngNotify', 'ngSails', 'angular-loading-bar']);

mainApp.run(['$rootScope', '$http', function ($rootScope, $http) {
        $rootScope.textName = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z].[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_ ]{0,100}$/;
         $rootScope.longTitle = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z].[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_ ]{4,1000}$/;
        $rootScope.specialty = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z].[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_ ]{2,1000}$/;
        $rootScope.PhoneNumber = /^[0-9]{11}$/;
        $rootScope.password = /^.{6,35}$/;
        $rootScope.address =/^.{6,2000}$/,
        $rootScope.email = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]*\.([a-zA-Z]{2,4})$/;
        $rootScope.errorMessage = "Can't reach the movoclinic network";
    }])

mainApp.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }])

mainApp.config(['$sailsProvider', function ($sailsProvider) {
        $sailsProvider.url = '/';
    }]);
//
//
//// configure our routes
mainApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function
            ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
                // route for the home page
                .state('index', {
                    url: "/",
                    views: {
                        "header": {templateUrl: 'templates/header.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/default.html",
                            controller: 'defaultCtrl'},
                        "footer": {templateUrl: 'templates/footer.html'}
                    }
                })
                
                  .state('loadertest', {
                    url: "/loaderio-ac624977acbb6476287b9f69f15902cd/",
                    views: {
                        "content": {templateUrl: "partials/loaderio-ac624977acbb6476287b9f69f15902cd"},
                    }
                })
//
//                .state('drugs', {
//                    url: "/drugs",
//                    views: {
//                        "header": {templateUrl: 'templates/header.html',
//                            controller: 'headerCtrl'},
//                        "content": {templateUrl: "partials/drugs.html",
//                            controller: 'drugsCtrl'}
//                        , "footer": {templateUrl: 'templates/footer.html'}
//                    }
//                })
//
                .state('register', {
                    url: "/register",
                    views: {
                        "header": {templateUrl: 'templates/header.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/register.html",
                            controller: 'registerCtrl'}
                    }
                })
//
                .state('feeds', {
                    url: "/feeds",
                    views: {
                        "header": {templateUrl: 'templates/header.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/feeds.html",
                            controller: 'feedsCtrl'}
                        , "footer": {templateUrl: 'templates/footer.html'}
                    }
                })
//                .state('verifyAccount', {
//                    url: "/verifyAccount",
//                    views: {
//                        "header": {templateUrl: 'templates/header.html',
//                            controller: 'headerCtrl'},
//                        "content": {templateUrl: "partials/user/verifyAccount.html",
//                            controller: 'verifyAccountCtrl'}
//                        , "footer": {templateUrl: 'templates/footer.html'}
//                    }
//                })
//
                .state('login', {
                    url: "/login",
                    views: {
                        "header": {templateUrl: 'templates/header.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/login.html",
                            controller: 'loginCtrl'}
                        , "footer": {templateUrl: 'templates/footer.html'}
                    }
                })
                .state('dashboard', {
                    url: "/dashboard",
                    views: {
                        "header": {templateUrl: 'templates/userHeader.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/user/dashboard.html",
                            controller: 'dashboardCtrl'},
                        "footer": {templateUrl: 'templates/footer.html'}
                    }
                })

                .state('addClinic', {
                    url: "/clinics/addClinic",
                    views: {
                        "header": {templateUrl: 'templates/userHeader.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/clinics/addClinic.html",
                            controller: 'addClinicCtrl'}
                        , "footer": {templateUrl: 'templates/footer.html'}
                    }
                })

                .state('clinics', {
                    url: "/clinics",
                    views: {
                        "header": {templateUrl: 'templates/userHeader.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/clinics/clinics.html",
                            controller: 'clinicsCtrl'}
                        , "footer": {templateUrl: 'templates/footer.html'}
                    }
                })
                .state('addPhysician', {
                    url: "/addPhysician/:id",
                    views: {
                        "header": {templateUrl: 'templates/userHeader.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/physicians/addPhysician.html",
                            controller: 'addPhysicianCtrl'}
                        , "footer": {templateUrl: 'templates/footer.html'}
                    }
                })



//                .state('clinicDashboard', {
//                    url: "/user/clinicDashboard/:clinicId",
//                    views: {
//                        "header": {templateUrl: 'templates/header.html',
//                            controller: 'headerCtrl'},
//                        "content": {templateUrl: "partials/clinic/general/clinicDashboard.html",
//                            controller: 'clinicDashboardCtrl'}
//                        , "footer": {templateUrl: 'templates/footer.html'}
//                    }
//                })
                .state('updateClinic', {
                    url: "/updateclinic/:id",
                    views: {
                        "header": {templateUrl: 'templates/userHeader.html',
                            controller: 'headerCtrl'},
                        "content": {templateUrl: "partials/clinics/updateClinic.html",
                            controller: 'updateClinicCtrl'}
                        , "footer": {templateUrl: 'templates/footer.html'}
                    }
                })
//
//                .state('addAppointment', {
//                    url: "/clinic/:clinicId/addAppointment/:patientId",
//                    views: {
//                        "header": {templateUrl: 'templates/header.html',
//                            controller: 'headerCtrl'},
//                        "content": {templateUrl: "partials/clinic/appointments/addAppointment.html",
//                            controller: 'addAppointmentCtrl'}
//                        , "footer": {templateUrl: 'templates/footer.html'}
//                    }
//                })
//
//                .state('addPatient', {
//                    url: "/user/clinic/:clinicId/addPatient",
//                    views: {
//                        "header": {templateUrl: 'templates/header.html',
//                            controller: 'headerCtrl'},
//                        "content": {templateUrl: "partials/clinic/patients/addPatient.html",
//                            controller: 'addPatientCtrl'}
//                        , "footer": {templateUrl: 'templates/footer.html'}
//                    }
//                })
//                .state('patients', {
//                    url: "/user/clinic/:clinicId/patients/",
//                    views: {
//                        "header": {templateUrl: 'templates/header.html',
//                            controller: 'headerCtrl'},
//                        "content": {templateUrl: "partials/clinic/patients/patients.html",
//                            controller: 'patientsCtrl'}
//                        , "footer": {templateUrl: 'templates/footer.html'}
//                    }
//                })
//
//
//
                .state('otherwise', {
                    views: {
                        "header": {templateUrl: 'templates/header.html'},
                        // "content": {templateUrl: 'partials/404.html'},
                        "footer": {templateUrl: 'templates/footer.html'}
                    }
                })
//        $locationProvider.html5Mode({
//            enabled: true,
//            requireBase: false
//        });
    }])
//});
           