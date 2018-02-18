interface mainInterface {

}

class mainController {
    constructor($scope: mainInterface, comm: Communication.CommunicationService) {
        comm.Start("Message!");
      
    }

}


app.controller("mainController", mainController);