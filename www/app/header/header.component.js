var app = angular.module('maply');

app.component('headerApp', {
    templateUrl: 'app/header/header.html',
    controller: HeaderAppController,
    controllerAs: 'ctrl',
    bindings: {
        title: '@',
        badgeTitle : '<',
        badgeTitleContent : '=',
        iconLeft : '@',
        textLeft : '@',
        badgeLeft : '<',
        badgeLeftContent : '=',
        fnLeft : '&',
        iconRight : '@',
        textRight: '@',
        badgeRight : '<',
        badgeRightContent : '=',
        fnRight : '&'
    }
});

function HeaderAppController($scope, $rootScope, $state){}