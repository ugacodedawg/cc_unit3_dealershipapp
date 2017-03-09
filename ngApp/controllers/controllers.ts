namespace dealershipapp.Controllers {

  export class HomeController {
    public message = 'Some of my favorite movies!';
    public movies;

    constructor(movieService:dealershipapp.Services.MovieService) {
      this.movies = movieService.listMovies();
    }

  }

  export class AboutController {
    public message = 'Hello from the about page!';
  }

  const apiUrl = '/api/cars/search/';

  export class CarController {
    public message = 'We\'ve got any car you want (provided it\'s a BMW, Tesla, or MINI) and in any color you want (provided it\'s Green, Orange, or Black).  Click on each car to learn more. Enjoy our site!';
    public makes;
    public carMakeID;
    public cars;
    public search;

    public fetch() {
      if(!this.search) {
        //this.makes = carService.listMakes();
        this.cars = this.modelService.listModels();
      } else {
        this.$http.get(apiUrl + this.search).then((res) => {
          console.log(res);
          this.cars = res.data;
        })
      }
    }

    public filter() {
      this.$http.get('/api/makes/')
      .then((response) => {
        this.makes = response.data;
      })
      .catch((response) => {
        console.error('Could not retrieve cars.');
      });
    }

    public showModal(carObj) {
      this.$uibModal.open({
        templateUrl: '/ngApp/views/carDialog.html',
        controller: 'DialogController',
        controllerAs: 'modal',
        resolve: {
          car: () => carObj
        },
        size: 'lg'
      });
    };

    constructor(carService:dealershipapp.Services.CarService,
      private modelService:dealershipapp.Services.ModelService,
      private $uibModal: angular.ui.bootstrap.IModalService,
      private $http: ng.IHttpService) {
        this.makes = carService.listMakes();
        this.cars = modelService.listModels();
      }

  }

  angular.module('dealershipapp').controller('CarController', CarController);

  class DialogController {
    public ok() {
      this.$uibModalInstance.close();
    }

    constructor(public car, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }

  }

  angular.module('dealershipapp').controller('DialogController', DialogController);

}
