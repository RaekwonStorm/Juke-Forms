'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('createPlaylist', {
    url: '/createPlaylist',
    templateUrl: '/js/playlist/create-playlist.html',
    controller: 'PlaylistCtrl'
  })
  .state('playlist', {
    url: '/playlist/:id',
    templateUrl: '/js/playlist/playlist.html',
    controller: 'PlaylistCtrl'
  })
})
