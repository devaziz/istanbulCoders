  angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.mainData ={};
  })
  .controller('SearchCtrl', function ($scope,$state) {
    $scope.search = function(){
      console.log('searchctrl:'+$scope.mainData.searchText);
      $state.go('app.result',{searchText: $scope.mainData.searchText})
    }
  })
  .controller('ResultCtrl', function($scope, $stateParams,api) {
          if ($scope.mainData.searchText ==""){
              $scope.mainData.searchText = $stateParams.searchText;
          }

        console.log('resultctrl:'+$stateParams.searchText);
        api.searchVenue($stateParams.searchText,function(data){
            console.log(data.response.venues);
          $scope.venues = data.response.venues;
        })
  })
      .controller('VenueCtrl', function ($scope,$stateParams,api) {
          var venueID = $stateParams.venueId;
        api.getVenue(venueID,function(data){
            $scope.venue = data.response.venue;
            $scope.venue.thumbnail = data.response.venue.photos.groups[0].items[0].prefix + '90x90'+
                data.response.venue.photos.groups[0].items[0].suffix
            $scope.venue.photo = data.response.venue.photos.groups[0].items[0].prefix + '600x200'+
                data.response.venue.photos.groups[0].items[0].suffix
        })
      })
      .controller('PlaylistsCtrl', function($scope) {
        $scope.playlists = [
          { title: 'Reggae', id: 1 },
          { title: 'Chill', id: 2 },
          { title: 'Dubstep', id: 3 },
          { title: 'Indie', id: 4 },
          { title: 'Rap', id: 5 },
          { title: 'Cowbell', id: 6 }
        ];
      })

      .controller('PlaylistCtrl', function($scope, $stateParams) {
      });