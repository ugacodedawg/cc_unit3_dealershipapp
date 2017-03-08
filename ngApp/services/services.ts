namespace dealershipapp.Services {

  export class MovieService {
      private MovieResource;

      public listMovies() {
          return this.MovieResource.query();
      }

      constructor($resource: ng.resource.IResourceService) {
          this.MovieResource = $resource('/api/movies');
      }
  }
  angular.module('dealershipapp').service('movieService', MovieService);
  export class MyService {

  }
  angular.module('dealershipapp').service('myService', MyService);
//  }

    /*
    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('dealershipapp').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('dealershipapp').service('myService', MyService);
    }
    */

    export class CarService {
        private CarResource;

        public listMakes() {
            return this.CarResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarResource = $resource('/api/makes');
        }
    }
    angular.module('dealershipapp').service('carService', CarService);

    export class ModelService {
        private ModelResource;

        public listModels() {
            return this.ModelResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.ModelResource = $resource('/api/cars');
        }
    }
    angular.module('dealershipapp').service('modelService', ModelService);
}
