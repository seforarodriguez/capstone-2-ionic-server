angular.module('mustDos', ['ionic', 'mustDos.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
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
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.activityInput', {
    url: '/activity-input',
    views: {
      'menuContent': {
        templateUrl: 'templates/activity-input.html'
      }
    }
  })

    .state('app.citylist', {
      url: '/city-list',
      views: {
        'menuContent': {
          templateUrl: 'templates/listByCity.html',
          controller: 'CityListCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/cities/:name',
    views: {
      'menuContent': {
        templateUrl: 'templates/cityMustdo.html',
        controller: 'MustDoCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/city-list');
});
