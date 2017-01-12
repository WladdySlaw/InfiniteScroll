skywellApp.controller('skywellCtrl', function($scope, $http) {
    // $http.get("app/data/data.json").then(function(response) {
    //     $scope.myData = response.data.photos;
    // });
    $http({method:'JSONP', params : {callback : 'JSON_CALLBACK'}, 
	url : 'https://api.vk.com/method/photos.get?owner_id=313802705&album_id=240112967&rev=0'})
	.success(function(data){
  	$scope.myData = data.response;
  	console.log($scope.results);
    }); //succsse end	
    $scope.imageCount = 12;
    $scope.addCount = 3;
    $scope.checkboxStatus = true;
    window.addEventListener("scroll", function () {
        if  ($scope.checkboxStatus == true){
                if (document.body.offsetHeight <= document.documentElement.clientHeight + document.body.scrollTop) {
                    $scope.imageCount = $scope.imageCount + $scope.addCount;
                    $scope.$apply();
            }
        }
    });
    $scope.deleteImage = function(i){
        $scope.myData.splice(i, 1);
    }
});