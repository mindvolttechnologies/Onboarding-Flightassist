// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
        'starter.Authenticate',
        'starter.configService',
        'ngCookies',
        'ngCordova'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'LoginCtrl'
      }
    }
  })
    .state('tab.stepone', {
      url: '/step-one',
      views: {
        'tab-step1': {
          templateUrl: 'templates/tab-step1.html',
          controller: 'StepCtrl'
        }
      }
    })
    .state('tab.steptwo', {
      url: '/step-two',
      views: {
        'tab-step2': {
          templateUrl: 'templates/tab-step2.html',
          controller: 'OnboardCtrl'
        }
      }
    })
    .state('tab.stepthree', {
      url: '/step-three',
      views: {
        'tab-step3': {
          templateUrl: 'templates/tab-step3.html',
          controller: 'OnboardCtrl'
        }
      }
    })
    .state('tab.stepfour', {
      url: '/step-four',
      views: {
        'tab-step4': {
          templateUrl: 'templates/tab-step3.html',
          controller: 'OnboardCtrl'
        }
      }
    })
    .state('tab.stepfive', {
      url: '/step-five',
      views: {
        'tab-step5': {
          templateUrl: 'templates/tab-step3.html',
          controller: 'OnboardCtrl'
        }
      }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});


