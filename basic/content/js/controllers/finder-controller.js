var Finder;
(function (Finder) {
    var FinderController = (function () {
        function FinderController($scope) {
            var _this = this;
            this.$scope = $scope;
            this.$scope.FilterReader = "hi";

        };
        return FinderController;
    }());
    FinderController.$inject = ['$scope'];
    Finder.FinderController = FinderController;
})(Finder || (Finder = {}));
