(function() {

  'use strict';

  angular.module('angularMusicBrowser')
  .controller('AlbumListController', function ($state, $stateParams, ArtistsService) {

    var vm = this;

    ArtistsService.getArtists().success(function() {
      vm.artist = ArtistsService.getArtistById($stateParams.artistId);
    });

    vm.goAlbum = function(album) {
      $state.go( 'artists.albums.songs', { albumId : album.id } );
    };
  });
})();
