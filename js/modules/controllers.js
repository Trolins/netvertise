Test.controller('mainCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

	$scope.snapshotFile = "";
	$scope.deltas = "";
	$scope.parsedFile = {};
	$scope.uploadFile = {};
	// request for start
	$http({
		method: 'GET',
		dataType: "text/csv",
		url: 'snapshot.csv'
		}).then(function successCallback(response) {
			$scope.snapshotFile = response;
			// parse function
			var allRows = $scope.snapshotFile.data.split(/\r?\n|\r/);
			for (var singleRow = 0; singleRow < allRows.length - 1; singleRow++) {
			    $scope.parsedFile[singleRow] = allRows[singleRow].split(',');
			} 
		}, function errorCallback(response) {
			console.log("snapshot file not found.");
	});

	$scope.uploadForm = function(element) {
        	$scope.uploadFile = element.files[0];
	}
	// upload's file function
	$scope.uploadFiled = function() {		
		xhr=new XMLHttpRequest(),
		form=new FormData();

	    form.append("fil",$scope.uploadFile);
	    xhr.open("post","upload.php",true);
	    xhr.send(form); 
    	$scope.uploadFile = {};
	}
}]);
