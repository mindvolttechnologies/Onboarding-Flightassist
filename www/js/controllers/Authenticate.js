/**
 * Created by Dave Sari on 11/22/2016.
 */

angular.module('starter.Authenticate', [])

  .controller('LoginCtrl', function($scope,$rootScope,$state,configService,$ionicModal) {


      $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

    $scope.showToast = function(message ,duration,location){
      $cordovaToast.show(message,long,top);
    };

    /**-----------------------------------------KeyHandler------------------------------------------------**/

      $scope.enterKeyPressed = function (event, User) {
        if (event.which === 13 || event.keyCode === 13) {
          $scope.authenticateUser(User);
        }
      };

    /**-----------------------------------------Generic Request-------------------------------------------**/

      $scope.AuthenticateUser = function(User){

        var login ={};
        login.email = User.email;
        login.password = User.password;

        console.log(User.email);
        console.log( User.password);

        configService.genericRequest(login, configService.Login)
          .success(function (response) {
            if(response.loginStatus === false){
              configService.showToast(response.loginMessage);

            }else{
              configService.showToast("Login "+response.loginMessage+"! Please wait...");
              configService.setCookie('userLoggedInAs', response.names);
              configService.setCookie('userInfo', response.sessID);
              $rootScope.userLoggedInAs = configService.getCookieContent('userLoggedInAs');
              $state.go('dashboard');

              console.log(response);
            }
          })
          .error(function () {
            configService.showToast("Unable to log you in. Please try again later.");
          });
      };
  });
