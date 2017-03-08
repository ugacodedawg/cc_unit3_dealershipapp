var dealershipapp;
(function (dealershipapp) {
    angular.module('dealershipapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: dealershipapp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: dealershipapp.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('cars', {
            url: '/cars',
            templateUrl: '/ngApp/views/cars.html',
            controller: dealershipapp.Controllers.CarController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(dealershipapp || (dealershipapp = {}));
