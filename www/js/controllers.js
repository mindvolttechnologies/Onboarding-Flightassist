angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.createContact = function(u) {
      $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
      $scope.modal.hide();
    };
        })
  .controller('MyCtrl', function($scope, $ionicHistory) {
    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };
  })

  .controller('StepCtrl', function($scope) {
    $scope.devList = [
      { text: "PPL STUDENT", checked: true },
      { text: "NIGHT RATING", checked: false },
      { text: "CPL STUDENT", checked: false },
      { text: "MULTI INSTRUMENT", checked: false },
      { text: "GROUNDS INSTRUCTOR", checked: false }
    ];

    $scope.pushNotificationChange = function() {
      console.log('Push Notification Change', $scope.pushNotification.checked);
    };

    $scope.pushNotification = { checked: true };
    $scope.emailNotification = 'Subscribed';

  })


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
