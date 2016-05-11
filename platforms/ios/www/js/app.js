angular.module('theJudge', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.random', {
    url: '/random',
    views: {
      'menuContent': {
        templateUrl: 'templates/random.html'
      }
    }
  })

  .state('app.outfits', {
    url: '/outfits',
    views: {
      'menuContent': {
        templateUrl: 'templates/outfits.html',
        controller: 'OutfitsCtrl'
      }
    }
  })

  .state('app.upload', {
    url: '/upload',
    views: {
      'menuContent': {
        templateUrl: 'templates/upload.html',
        controller: 'PictureCtrl'
      }
    }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'OutfitsCtrl'
        }
      }
  })

  .state('app.single', {
    url: '/outfits/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'OutfitsCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/home');
});
