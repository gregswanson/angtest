(function(){
'use strict';

angular.module('lunchCheck', [])
.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];

function lunchCheckController($scope){
	var el = document.querySelector('.message');

	$scope.dishes = "";
	$scope.msg = "";
	$scope.color = "";

	$scope.checkDishes = function(){
		var dishArray = $scope.dishes.split(',');
		var dishNum = dishArray.length;
		
		if (dishNum == 0 || dishNum == 1){
			$scope.msg = "Please enter data first";
			el.style.color = "red";
			el.style.border = "1px solid red";
			$scope.dishes = "";
		} else if (dishNum < 4 && dishNum > 1){
			$scope.msg = "Enjoy!";
			el.style.color = "green";
			el.style.border = "1px solid green";
			$scope.dishes = "";
		} else if (dishNum >= 4) {
			$scope.msg = "Too much!";
			el.style.color = "green";
			el.style.border = "1px solid green";
			$scope.dishes = "";
		};

	}
}


})();