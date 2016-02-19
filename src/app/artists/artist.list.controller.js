(function() {

  'use strict';

  angular.module('angularMusicBrowser')
  .controller('ArtistListController', function ($state, ArtistsService) {

    var vm = this;

    ArtistsService.getArtists().success(function(data) {
      vm.artists = data;
    });

    vm.goArtist = function (artist) {
      $state.go( 'artists.albums', { artistId : artist.id } );
    };
  });
})();
