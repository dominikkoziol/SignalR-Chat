var mainController = (function () {
    function mainController($scope, signalrService) {
        signalrService.Start();
        $scope.message = {};
        $scope.sendMessage = function () {
            signalrService.Announce($scope.message.text);
        };
        signalrService.GetMessage();
    }
    return mainController;
}());
app.controller("mainController", mainController);
//# sourceMappingURL=mainController.js.map