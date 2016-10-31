Test.controller('mainCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

	$scope.snapshotFile = "";
	$scope.deltas = "";
	$scope.parsedFile = {};
	$scope.uploadSuccess = false;
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
	$scope.uploadFile = {};

	$scope.uploadForm = function(element) {
        	$scope.uploadFile = element.files[0];
	}

	$scope.uploadFiled = function() {		
		xhr=new XMLHttpRequest(),
		form=new FormData();

	    form.append("fil",$scope.uploadFile);
	    xhr.open("post","upload.php",true);
	    xhr.send(form); 
		$scope.uploadSuccess = true;
    	$scope.uploadFile = {};
	}
if ($scope.uploadSuccess) {	
	$scope.deltasUploaded();
}
// $scope.$watch($scope.uploadSuccess, function() {
// 	console.log("qwety");
// });
// if ($scope.uploadSuccess) {
	$scope.deltasUploaded = function() {
		$http({
		method:'GET',
		dataType:"text/csv",
		url:'download/deltas.csv'
	}).then(function successCallbackSecond(response) {
		console.log("watcher start");
		// parse function
		var allRows = response.data.split(/\r?\n|\r/);
		for (var singleRow = 0; singleRow < 11; singleRow++) {
		    $scope.deltas[singleRow] = allRows[singleRow].split(',');
		}
		console.log("$scope.deltas - ", $scope.deltas);
		}, function errorCallbackSecond(response) {
			console.log("deltas file not found.");			
	});
};
// setInterval(function() {
// 	console.log("$scope.server - ", obj)
// }, 50);

}]);
