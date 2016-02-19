(function() {

  'use strict';

  angular.module('angularMusicBrowser')
  .controller('SongListController', function ($stateParams, ArtistsService) {

    var vm = this;

    ArtistsService.getArtists().success(function() {
      vm.artist = ArtistsService.getArtistById($stateParams.artistId);
      vm.album  = ArtistsService.getAlbumById($stateParams.albumId);
    });
  });
})();
