'use strict';

juke.factory('PlaylistFactory', function ($http, SongFactory) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};


  PlaylistFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  }

  PlaylistFactory.fetchById = function(id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) {
      return response.data;
    });
  }

  PlaylistFactory.createPlaylist = function (playlist) {

   return $http.post("/api/playlists", playlist)
    .then(function (response) {
      cachedPlaylists.push(response.data);
      return response.data;
    });
  }

  PlaylistFactory.addSong = function (playlist, song) {

    return $http.post("/api/playlists/" + playlist.id + "/songs", song)
      .then(function (response) {
        return response.data;
      })

  }

  return PlaylistFactory;

})
