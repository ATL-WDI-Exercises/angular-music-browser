(function() {

  'use strict';

  angular.module('angularMusicBrowser')
  .service('ArtistsService', function($http) {

    var that = this;

    that.artists = [];

    that.promise = undefined;

    that.getArtists = function() {
      if (!that.promise) {
        that.promise = $http.get('assets/data/artists.json').success(function(data) {
          that.artists = data;
        });
      }
      return that.promise;
    };

    that.getArtistById = function(id) {
      return _.find(that.artists, function(artist) {
        return artist.id === parseInt(id);
      });
    };

    var findAlbum = function(artist, albumId) {
      return _.find(artist.albums, function(album) {
        return album.id === parseInt(albumId);
      });
    };

    that.getAlbumById = function(albumId) {
      var result;
      _.each(that.artists, function(artist) {
        var album = findAlbum(artist, albumId);
        if (album) {
          result = album;
        }
      });
      return result;
    };
  });
})();
