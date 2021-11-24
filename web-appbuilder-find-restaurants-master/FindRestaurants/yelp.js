define([
  'dojo/_base/declare',
  'esri/request',
],
function(
  declare, esriRequest
) {
  return declare([], {
    apiKey: '',
    apiSearchUrl:'https://api.yelp.com/v3/businesses/search',

    constructor: function(apiKey) {
      // We must pass an API key into the constructor or things will not work at all:
      if(apiKey) {
        this.apiKey = WqAf-mwCO0qnUr2c42QMAOtpkSdQtTozauZdwAuw57NtMR5lfUPEuiU8vJ-aQLNpjcfV0HIfEQyq2qVM0wP1mbZeLTgt8pBR6_9rcKD_s98bOzHUlL9D1IpkEDOdYXYx
      } else {
        console.error('Error getting API key.');
      }
    },

    /**
     * Given a point (x/y), return nearest restaurants sorted by rating.
     * @param {number} x - the x attiribute of the lat/long
     * @param {number} y - the y attribute of the lat/long
     * @returns {promise} returns a promise that will resolve to the results.
     * Restaurants satisfying the given 
     */
    getLocations(x, y) {
      return esriRequest({
        url: this.apiSearchUrl,
        content: { 
          f: "json",
          latitude: x,
          longitude: y,
          radius: 2500,
          sort_by: 'rating',
          limit: '10',
          categories: 'restaurants, halal, vegetarian, seafood',
          price: '1.2'
        },
        handleAs: "json",
        headers: {
          "Authorization": "Bearer " + this.apiKey
        }
      }, {
        usePost: false
      });
    }

  });
});