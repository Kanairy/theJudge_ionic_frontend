angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

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
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('OutfitsCtrl', function($scope) {
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
      occasion: 'first date',
      image_url: 'http://media4.popsugar-assets.com/files/2015/05/19/798/n/1922398/6ef7687e_edit_img_cover_file_15954503_1432054424_9k_-4fZ3IXJ.xxxlarge/i/How-Take-Mirror-Selfie.jpg',
      positive: '2',
      negative: '21'
    }
  ];
})

.controller('PictureCtrl', function($scope, $cordovaCamera) {

  document.addEventListener("deviceready", function () {

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });

  }, false);
});