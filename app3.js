(function(){
'use strict';

angular.module('menuCatApp', [])
.controller('menuCatCtrl', menuCatCtrl)
.service('menuCatService', menuCatService)
.constant('APIBasePath', "http://davids-restaurant.herokuapp.com");


menuCatCtrl.$inject = ['menuCatService'];
function menuCatCtrl(menuCatService){
	var menu = this;
	 var promise = menuCatService.getMenuCatagories();

	 promise.then(function(response){
	 	menu.catagories = response.data;
	 }).catch(function(error){
	 	console.log('something went wrong!');
	 });

	menu.logMenuItems = function (shortName){
		var promise = menuCatService.getMenuCatagory(shortName);

		promise.then( function(response){
			console.log(response.data);
		})
		.catch(function(error){
			console.log(error);
		})
			
		};
};


menuCatService.$inject = ['$http', 'APIBasePath'];
function menuCatService($http, APIBasePath){
	var service = this;

	service.getMenuCatagories = function(){
		var response = $http({
			method: "GET",
			url: (APIBasePath + "/categories.json")
		});

		return response;
	};

	service.getMenuCatagory = function(shortName) {
		var response = $http({
			method: "GET",
			url: (APIBasePath + "/menu_items.json"),
			params: {
				category: shortName
			}
		});

		return response;
	};

}




})();