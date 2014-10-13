angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('CountriesCtrl', function($scope, Countries) {
  $scope.countries = Countries.all();
})

.controller('CountryDetailCtrl', function($scope, $stateParams, Countries) {
  $scope.country = Countries.get($stateParams.countryId);
})

/*.controller('AccountCtrl', function($scope) {
});*/
