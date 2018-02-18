module Communication {
    export class CommunicationService {
        static $inject = ['$rootScope'];
        private _jQ: any = (<any>window).$;
        private srConnection: SignalR.Connection;
        private hub;

        constructor(private $rootScope) {
            this.hub = this._jQ.connection.commonHub;

        }
        public Announce(message: string) {
            this.hub.server.announce(message).done(function () {
                console.log("very good");
            }).fail(function () {
                console.log("I'm sorry");
            })
        }

        public GetMessage() {
            this.hub.client.announce = function (message) {
                console.log(message);
            }
        }
        public Start(): void {
            $.connection.hub.start().done(() => {
                console.log("polaczono");
            }).fail(function () { console.log("nie poszło"); });
        }
    }
}
app.service('signalrService', Communication.CommunicationService);
