/**
 * Created by Dave Sari on 11/22/2016.
 */

angular.module('starter.configService', []).service('configService', function($http,$cookies,$cordovaToast) {

    /**----------------------------------------Base URL----------------------------------------------------------**/

        var BASE_URL = 'http://10.1.9.100:9999/api/v1/';


    /**----------------------------------------Featured endpoints------------------------------------------------**/

        this.Login ='';
        this.Logout='';
        this.CreatePersonalDetails='';
        this.CreateProfileType='';
        this.CreateIdType='';

    /**----------------------------------------Requests Types---------------------------------------------------**/

        var POST_REQUEST ='POST';



    /**----------------------------------------Cookies Setters and Getters--------------------------------------**/

        this.getCookieContent = function(key){
          var content = $cookies.get(key);
          if(content !== null){
            return content;
          }
        };

        this.setCookie = function(key, value){
          if(key !== null && value !== null) {
            $cookies.put(key, value);
          }
        };

        this.removeCookie = function(key){
          if(key !== null){
            $cookies.remove(key);
          }
        };

      this.showToast = function(message ,duration,location){
        $cordovaToast.show(message,long,top);
      };

    /**-----------------------------------------Generic Request------------------------------------------------**/


        this.genericRequest = function(request, endpoint){
          return $http({
            method: POST_REQUEST,
            url: BASE_URL + endpoint + '',
            headers: {'Content-type':'application/json'},
            data: angular.toJson(request)
          })
        };
  });
