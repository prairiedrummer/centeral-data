var CenteralData;
(function (CenteralData) {
    var Register = (function () {
        function Register() {

        }
        return Register;
    }());

    Register.CenteralData = angular.module("CenteralData", []);

    CenteralData.CenteralData = Register;

    Register.CenteralData.controller("centeralDataController", function () { return new CenteralData.CenteralDataController(); });


})(CenteralData || (CenteralData = {}));