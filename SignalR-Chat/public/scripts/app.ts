var app = angular.module('SignalR-Chat', []);

app.service('authInterceptor', function () {

});

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.config
    $httpProvider.interceptors.push('authInterceptor');
}]);
