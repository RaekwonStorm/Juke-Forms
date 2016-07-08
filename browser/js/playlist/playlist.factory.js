'use strict';

juke.factory('PlaylistFactory', function ($http) {

  var methods = {};

  methods.createPlaylist = function (playlist) {

   return $http.post("/api/playlists/", playlist)
    .then(function (resPlaylist) {
      return resPlaylist.data;
    })
  }

  return methods;

})
