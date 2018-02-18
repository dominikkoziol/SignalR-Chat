var mainController = (function () {
    function mainController($scope, comm) {
        comm.Start("Message!");
    }
    return mainController;
}());
app.controller("mainController", mainController);
//# sourceMappingURL=mainController.js.map