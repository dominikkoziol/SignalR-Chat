var Communication;
(function (Communication) {
    var CommunicationService = (function () {
        function CommunicationService($rootScope) {
            this.$rootScope = $rootScope;
            this._jQ = window.$;
            this.hub = this._jQ.connection.commonHub;
        }
        CommunicationService.prototype.Announce = function (message) {
            this.hub.server.announce(message).done(function () {
                console.log("very good");
            }).fail(function () {
                console.log("I'm sorry");
            });
        };
        CommunicationService.prototype.GetMessage = function () {
            this.hub.client.announce = function (message) {
                console.log(message);
            };
        };
        CommunicationService.prototype.Start = function () {
            $.connection.hub.start().done(function () {
                console.log("polaczono");
            }).fail(function () { console.log("nie poszło"); });
        };
        return CommunicationService;
    }());
    CommunicationService.$inject = ['$rootScope'];
    Communication.CommunicationService = CommunicationService;
})(Communication || (Communication = {}));
app.service('signalrService', Communication.CommunicationService);
//# sourceMappingURL=SignalR_Service.js.map