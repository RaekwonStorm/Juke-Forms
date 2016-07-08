'use strict';

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $stateParams, $state, SongFactory, PlayerFactory) {

  if ($stateParams.id) {
    PlaylistFactory.fetchById($stateParams.id)
    .then(function (resPlaylist) {
      $scope.playlist = resPlaylist;
      return $scope.playlist.songs.map(SongFactory.convert);
    })
  }

  SongFactory.fetchAll()
    .then(function (songs) {
      $scope.songs = songs;
    });

  $scope.submit = function () {
    PlaylistFactory.createPlaylist($scope.playlist)
      .then(function (playlist) {
       $scope.playlist.name = "";
       $scope.playlistForm.$setPristine(true);
       $state.go('playlist', {id: playlist.id} )
      })
  }

  $scope.songSubmit = function () {
    PlaylistFactory.addSong($scope.playlist, $scope.selectedSong)
    .then(function (song) {
      $scope.playlist.songs.push(SongFactory.convert(song));
      $scope.selectedSong = "";
      $scope.songAdder.$setPristine(true);
    })
  }

  $scope.remove = function (song) {
    PlaylistFactory.removeSong($scope.playlist, song)
    .then(function () {
      var songArr = $scope.playlist.songs;
      for (var i=0; i<songArr.length; i++) {
        if (songArr[i].id === song.id) {
          songArr.splice(i, 1);
          break;
        }
      }
    })

  }

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

})
