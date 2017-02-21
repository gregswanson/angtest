(function(){
'use strict';

angular.module('menuCatApp', [])
.controller('menuCatCtrl', menuCatCtrl)
.service('menuCatService', menuCatService);


menuCatCtrl.$inject = ['menuCatService'];
function menuCatCtrl(menuCatService){
	var menu = this;
	 var promise = menuCatService.getMenuCatagories();

	 promise.then(function(response){
	 	menu.catagories = response.data;
	 }).catch(function(error){
	 	console.log('something went wrong!');
	 });

};


menuCatService.$inject = ['$http'];
function menuCatService($http){
	var service = this;

	service.getMenuCatagories = function(){
		var response = $http({
			method: "GET",
			url: ("http://davids-restaurant.herokuapp.com/categories.json")
		});

		return response;
	}

}




})();