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
        var CarController = (function () {
            function CarController(carService, modelService, $uibModal, $http) {
                this.$uibModal = $uibModal;
                this.$http = $http;
                this.message = 'We\'ve got any car you want (provided it\'s a BMW, Tesla, or MINI) and in any color you want (provided it\'s Green, Orange, or Black)...enjoy our site!';
                this.makes = carService.listMakes();
                this.cars = modelService.listModels();
            }
            CarController.prototype.fetch = function () {
                var _this = this;
                this.$http.get('/api/cars/:' + this.search)
                    .then(function (response) {
                    _this.cars = response.data;
                    console.log(_this.cars);
                })
                    .catch(function (error) {
                    console.error('Could not retrieve cars.');
                    console.log(error);
                });
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
                alert(this.makes.id);
            };
            CarController.prototype.showModal = function (carName) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/carDialog.html',
                    controller: 'DialogController',
                    controllerAs: 'modal',
                    resolve: {
                        carName: function () { return carName; }
                    },
                    size: 'sm'
                });
            };
            ;
            return CarController;
        }());
        Controllers.CarController = CarController;
        angular.module('dealershipapp').controller('CarController', CarController);
        var DialogController = (function () {
            function DialogController(carName, $uibModalInstance) {
                this.carName = carName;
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
