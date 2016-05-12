angular.module('theJudge', ['ionic','naif.base64', 'starter.controllers'])

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
        templateUrl: 'templates/random.html',
        controller: 'OutfitsCtrl'
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

  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'AppCtrl'
        }
      }
  })


  .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'templates/signup.html',
          controller: 'AppCtrl'
        }
      }
  })


  .state('app.outfits_hall', {
      url: '/outfits_hall',
      views: {
        'menuContent': {
          templateUrl: 'templates/outfits_hall.html',
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
