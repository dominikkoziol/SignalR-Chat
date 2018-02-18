interface mainInterface {
    sendMessage(): void;
    message: any;
}

class mainController {
    constructor($scope: mainInterface, signalrService: Communication.CommunicationService) {
        signalrService.Start();

        $scope.message = {};

        $scope.sendMessage = () => {
            signalrService.Announce($scope.message.text);
        }

        signalrService.GetMessage();
      
    }

}


app.controller("mainController", mainController);