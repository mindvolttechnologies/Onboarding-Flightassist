/**
 * Created by Dave Sari on 11/22/2016.
 */

angular.module('starter.OnboardingController', [])

  .controller('OnboardCtrl', function($scope,$rootScope,$state,configService) {


    /***-----------------------------------Capture Form inputs-------------------------------------------------------***/

    var OnboardingInfo= {};

    createUser = function(newUser){
      OnboardingInfo.firstName = newUser.firstname;
      OnboardingInfo.lastName = newUser.lastname;
      OnboardingInfo.emailAdd = newUser.email;
      OnboardingInfo.dateOfBirth = newUser.dob;
      OnboardingInfo.idNo = newUser.id;

      configService.genericRequest(OnboardingInfo,configService.CreatePersonalDetails)
        .success(function (response) {
          if(response.loginStatus === false){
            configService.showToast(response.loginMessage);

          }else{
            configService.showToast("Personal Details creation "+response.loginMessage+"! Please wait...");
            configService.setCookie('userLoggedInAs', response.names);
            configService.setCookie('userInfo', response.sessID);
            $rootScope.userLoggedInAs = configService.getCookieContent('userLoggedInAs');
            $state.go('tab.stepthree');

            console.log(response);
          }
        })
        .error(function () {
          configService.showToast("Unable to create your profile. Please try again later.");
        });
    };

    createProfile = function(userType){
      OnboardingInfo.firstName = userType.firstname;
      OnboardingInfo.lastName = userType.lastname;
      OnboardingInfo.emailAdd = userType.email;
      OnboardingInfo.dateOfBirth = userType.dob;
      OnboardingInfo.idNo = userType.id;

      configService.genericRequest(OnboardingInfo,configService.CreateProfileType)
        .success(function (response) {
          if(response.loginStatus === false){
            configService.showToast(response.loginMessage);

          }else{
            configService.showToast("Personal Details creation "+response.loginMessage+"! Please wait...");
            configService.setCookie('userLoggedInAs', response.names);
            configService.setCookie('userInfo', response.sessID);
            $rootScope.userLoggedInAs = configService.getCookieContent('userLoggedInAs');
            $state.go('tab.stepfour');

            console.log(response);
          }
        })
        .error(function () {
          configService.showToast("Unable to create your profile. Please try again later.");
        });
    };

    createID = function(userID){
      OnboardingInfo.idNumber = userID.idno;
      OnboardingInfo.idFrontImage = userID.idfront;
      OnboardingInfo.idBackImage = userID.idback;

      configService.genericRequest(OnboardingInfo,configService.CreateIdType)
        .success(function (response) {
          if(response.loginStatus === false){
            configService.showToast(response.loginMessage);

          }else{
            configService.showToast("Personal Details creation "+response.loginMessage+"! Please wait...");
            configService.setCookie('userLoggedInAs', response.names);
            configService.setCookie('userInfo', response.sessID);
            $rootScope.userLoggedInAs = configService.getCookieContent('userLoggedInAs');
            $state.go('tab.stepfive');

            console.log(response);
          }
        })
        .error(function () {
          configService.showToast("Unable to create your profile. Please try again later.");
        });
    };

  });
