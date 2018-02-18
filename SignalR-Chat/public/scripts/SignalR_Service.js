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
                alert("Very good");
            }).fail(function () {
                console.log("I'm sorry");
            });
        };
        CommunicationService.prototype.Start = function (message) {
            var _this = this;
            $.connection.hub.start().done(function () {
                console.log("polaczono");
                _this.Announce(message);
            }).fail(function () { console.log("nie poszło"); });
        };
        return CommunicationService;
    }());
    CommunicationService.$inject = ['$rootScope'];
    Communication.CommunicationService = CommunicationService;
})(Communication || (Communication = {}));
app.service('comm', Communication.CommunicationService);
//# sourceMappingURL=SignalR_Service.js.map