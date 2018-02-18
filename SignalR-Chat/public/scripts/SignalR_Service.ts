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
                alert("Very good");
            }).fail(function () {
                console.log("I'm sorry");
            })
        }
        public Start(message: string): void {
            $.connection.hub.start().done(() => {
                console.log("polaczono");
                this.Announce(message);
            }).fail(function () { console.log("nie poszło"); });
        }
    }
}
app.service('comm', Communication.CommunicationService);
