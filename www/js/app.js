// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('starter').controller('main', function($scope, $ionicScrollDelegate) {
    var lastPos = 0;
    var changed = false;

    $scope.init = function() {
        var getRandomInt = function(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        };

        $scope.data = data;
        $scope.activeSlide = getRandomInt(0, data.length -1);
//        $ionicScrollDelegate.update();
    }

    $scope.slideChanged = function($index) {
        $ionicScrollDelegate.scrollTop(true);
        changed = true;
    }

    $scope.scrollingComplete = function() {
        if (changed) { changed = false; return; }

        if ($ionicScrollDelegate.getScrollPosition().top > lastPos) {
            $ionicScrollDelegate.scrollBottom(true);
        } else {
            $ionicScrollDelegate.scrollTop(true);
        }
        lastPos = $ionicScrollDelegate.getScrollPosition().top;
    }
});

angular.module('starter').directive('pageBox', function() {
    return function (scope, element, attrs) {
        element[0].style.height = window.innerHeight + 'px';
    }
});
