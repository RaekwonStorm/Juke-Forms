'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('createPlaylist', {
    url: '/createPlaylist',
    templateUrl: '/js/playlist/playlist.html',
    controller: 'PlaylistCtrl'
  })
})
