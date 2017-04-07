var CenteralData;
(function (CenteralData) {
    var Register = (function () {
        function Register() {

        }
        return Register;
    }());

    Register.CenteralData = angular.module("CenteralData", ['ngRoute']);

    CenteralData.CenteralData = Register;

    Register.CenteralData.config([
    '$routeProvider', '$locationProvider', (function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../views/overview.html"
            })
            .when("/bing-webmaster", {
                templateUrl: "../views/bing-webmaster.html"
            })
          .when("/google-search-concel", {
              templateUrl: "../views/google-search-concel.html"
          })
            .otherwise({
                template: "<p>Fall</p>"
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    })
    ]);

    Register.CenteralData.controller("centeralDataController", function () { return new CenteralData.CenteralDataController(); });


})(CenteralData || (CenteralData = {}));