angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  $scope.loginData = {};

  $scope.loggedIn = false;

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };
  
  $scope.doRegistration = function() {
    $http({
      method: 'post',
      url: 'http://localhost:3000/api/users/',
      data: {
        user_name: 'test',
        email: 'test@test',
        password: 'test'
      }
    }).then(function(response) {
      console.log('success');
      console.log(response);
    }, function(response) {
      console.log('fail');
      console.log(response);
      //add something clever here
    });
  };

  $scope.doLogin = function() {
    //handle the actual login... api
    console.log('Doing login', $scope.loginData);
    //
    // $http({
    //   method: 'get',
    //   url: 'http://localhost:3000/api/users/'
    // }).then(function(response) {
    //   console.log(response);
    // }, function(response) {
    //   console.log('fail');
    //   console.log(response);
    // });
  };
  
  $scope.doLogout = function() {
    console.log('logging out', $scope.loginData);

    $scope.loginData = {};

    $scope.loggedIn = false;

  };
})

.controller('OutfitsCtrl', function($scope, $stateParams, $http) {
  //how to move stateparams back to the detail page...
  $scope.id = $stateParams.id;

  $scope.outfits = [];

  $scope.init = function() {
    $scope.doOutfitsRequest();
  };

  $scope.doOutfitsRequest = function() {
    $http({
      method: 'get',
      url: 'http://localhost:3000/api/outfits/'
    }).then(function(response) {
      console.log(response);
      $scope.outfits = response;
    }, function(response) {
      console.log('fail');
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

  $scope.doOutfitRequest = function() {
    $http({
      method: 'get',
      url: 'http://localhost:3000/api/outfits/' + $stateParams.id
    }).then(function(response) {
      console.log(response);
    }, function(response) {
      console.log('fail');
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
})

.controller('PictureCtrl', function($scope, $http) {

  //needs to do the api stuff

});
