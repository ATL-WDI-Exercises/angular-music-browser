(function() {
  'use strict';

  angular
    .module('angularMusicBrowser')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    var home = {
      name: 'home',
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    };
    var about = {
      name: 'about',
      url: '/about',
      templateUrl: 'app/about/about.html'
    };
    var artists = {
      name: 'artists',
      url: '/artists',
      templateUrl: '/app/artists/artist.list.html',
      controller: 'ArtistListController',
      controllerAs: 'vm'
    };
    var albums = {
      name: 'artists.albums',
      url: '/:artistId',
      templateUrl: '/app/artists/album.list.html',
      controller: 'AlbumListController',
      controllerAs: 'vm'
    };
    var songs = {
      name: 'artists.albums.songs',
      url: '/:albumId',
      templateUrl: '/app/artists/song.list.html',
      controller: 'SongListController',
      controllerAs: 'vm'
    };

    $stateProvider.state(home);
    $stateProvider.state(about);
    $stateProvider.state(artists);
    $stateProvider.state(albums);
    $stateProvider.state(songs);

    $urlRouterProvider.otherwise('artists');
    $locationProvider.html5Mode( { enabled: true, requireBase: true } );
  }
})();
