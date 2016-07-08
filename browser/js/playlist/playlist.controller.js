'use strict';

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {

  $scope.submit = function () {
    PlaylistFactory.createPlaylist($scope.playlist)
      .then(function (playlist) {
        console.log(playlist);
       $scope.playlist.name = "";
       $scope.playlistForm.$setPristine(true);
      })
  }

})
