var dealershipapp;
(function (dealershipapp) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('dealershipapp').service('movieService', MovieService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('dealershipapp').service('myService', MyService);
        var CarService = (function () {
            function CarService($resource) {
                this.CarResource = $resource('/api/makes');
            }
            CarService.prototype.listMakes = function () {
                return this.CarResource.query();
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('dealershipapp').service('carService', CarService);
        var ModelService = (function () {
            function ModelService($resource) {
                this.ModelResource = $resource('/api/cars');
            }
            ModelService.prototype.listModels = function () {
                return this.ModelResource.query();
            };
            return ModelService;
        }());
        Services.ModelService = ModelService;
        angular.module('dealershipapp').service('modelService', ModelService);
    })(Services = dealershipapp.Services || (dealershipapp.Services = {}));
})(dealershipapp || (dealershipapp = {}));
