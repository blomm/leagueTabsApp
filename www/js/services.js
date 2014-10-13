angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Countries', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var countries = [
    { id: 0, name: 'Thailand' },
    { id: 1, name: 'Cambodia' },
    { id: 2, name: 'Myanmar' },
    { id: 3, name: 'Vietnam' },
    { id: 4, name: 'Laos' }
  ];

  return {
    all: function() {
      return countries;
    },
    get: function(countryId) {
      // Simple index lookup
      return countries[countryId];
    }
  }
});
