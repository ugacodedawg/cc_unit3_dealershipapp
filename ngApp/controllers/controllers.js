var dealershipapp;
(function (dealershipapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.message = 'Some of my favorite movies!';
                this.movies = movieService.listMovies();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var apiUrl = '/api/cars/search/';
        var CarController = (function () {
            function CarController(carService, modelService, $uibModal, $http) {
                this.modelService = modelService;
                this.$uibModal = $uibModal;
                this.$http = $http;
                this.message = 'We\'ve got any car you want (provided it\'s a BMW, Tesla, or MINI) and in any color you want (provided it\'s Green, Orange, or Black).  Click on each car to learn more. Enjoy our site!';
                this.makes = carService.listMakes();
                this.cars = modelService.listModels();
            }
            CarController.prototype.fetch = function () {
                var _this = this;
                if (!this.search) {
                    this.cars = this.modelService.listModels();
                }
                else {
                    this.$http.get(apiUrl + this.search).then(function (res) {
                        console.log(res);
                        _this.cars = res.data;
                    });
                }
            };
            CarController.prototype.filter = function () {
                var _this = this;
                this.$http.get('/api/makes/')
                    .then(function (response) {
                    _this.makes = response.data;
                })
                    .catch(function (response) {
                    console.error('Could not retrieve cars.');
                });
            };
            CarController.prototype.showModal = function (carObj) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/carDialog.html',
                    controller: 'DialogController',
                    controllerAs: 'modal',
                    resolve: {
                        car: function () { return carObj; }
                    },
                    size: 'lg'
                });
            };
            ;
            return CarController;
        }());
        Controllers.CarController = CarController;
        angular.module('dealershipapp').controller('CarController', CarController);
        var DialogController = (function () {
            function DialogController(car, $uibModalInstance) {
                this.car = car;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        angular.module('dealershipapp').controller('DialogController', DialogController);
    })(Controllers = dealershipapp.Controllers || (dealershipapp.Controllers = {}));
})(dealershipapp || (dealershipapp = {}));
