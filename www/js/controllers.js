angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  $scope.loginData = {};

  $scope.loggedIn = true;

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

  $scope.doLogin = function() {
    //handle the actual login... api
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('OutfitsCtrl', function($scope, $stateParams) {
  //how to move stateparams back to the detail page...
  $scope.id = $stateParams.id;

  $scope.outfits = [
    {
      outfit_id: 1,
      occasion: 'first date',
      image_url: 'http://media4.popsugar-assets.com/files/2015/05/19/798/n/1922398/6ef7687e_edit_img_cover_file_15954503_1432054424_9k_-4fZ3IXJ.xxxlarge/i/How-Take-Mirror-Selfie.jpg',
      positive: '2',
      negative: '21'
    },
    {
      outfit_id: 2,
      occasion: 'three hundredth date',
      image_url: 'http://trendymods.com/wp-content/uploads/2015/09/2-How-To-Take-The-Perfect-Changing-Room-Selfie-.jpg',
      positive: '2',
      negative: '21'
    }
  ];
})

.controller('PictureCtrl', function($scope, $http) {

  //needs to do the api stuff

});