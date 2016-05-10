angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

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

  .state('app.random2', {
    url: '/random2',
    views: {
      'menuContent': {
        templateUrl: 'templates/random2.html'
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


  .state('app.list', {
      url: '/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/list.html'
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
    url: '/home/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'OutfitsCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/home');
});
