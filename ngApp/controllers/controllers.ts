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

   export class CarController {
        public message = 'We\'ve got any car you want (provided it\'s a BMW, Tesla, or MINI) and in any color you want (provided it\'s Green, Orange, or Black)...enjoy our site!';
        public makes;
        public cars;
        public search;
        public fetch() {
          this.$http.get('/api/cars/:' + this.search)
              .then((response) => {
                  this.cars = response.data;
                  console.log(this.cars);
              })
              .catch((error) => {
                  console.error('Could not retrieve cars.');
                  console.log(error);
              });
        }
        public filter() {

          this.$http.get('/api/makes/')
              .then((response) => {
                  this.makes = response.data;

              })
              .catch((response) => {
                  console.error('Could not retrieve cars.');
              });

              alert(this.makes.id);
        }
        public showModal(carName: string) {
           this.$uibModal.open({
               templateUrl: '/ngApp/views/carDialog.html',
               controller: 'DialogController',
               controllerAs: 'modal',
               resolve: {
                   carName: () => carName
               },
               size: 'sm'
           });
       };

        constructor(carService:dealershipapp.Services.CarService,
        modelService:dealershipapp.Services.ModelService,
        private $uibModal: angular.ui.bootstrap.IModalService,
        private $http: ng.IHttpService) {
            this.makes = carService.listMakes();
            this.cars = modelService.listModels();
        }

       //constructor(private $uibModal: angular.ui.bootstrap.IModalService) { }
   }

   angular.module('dealershipapp').controller('CarController', CarController);

    class DialogController {

        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(public carName: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
    }

    angular.module('dealershipapp').controller('DialogController', DialogController);

}
