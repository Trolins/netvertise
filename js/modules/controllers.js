Test.controller('mainCtrl', ['$scope', '$rootScope', function($scope, $rootScope, $http) {


	$scope.snapshotFile = $.ajax({		
        type: "GET",
        url: "snapshot.csv",
        dataType: "text/csv",
        success: function () {
			console.log("snapshot - ", $scope.snapshotFile);
		}
	})


}]);
