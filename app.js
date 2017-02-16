(function (){
'use strict';

angular.module("shopApp", [])
.controller('shoppingListAddCtrl', shoppingListAddCtrl)
.controller('shoppingListShowCtrl', shoppingListShowCtrl)
.service('shoppingListService', shoppingListService);

shoppingListAddCtrl.$inject = ['shoppingListService'];
function shoppingListAddCtrl(shoppingListService){
	var itemAdder = this;

	itemAdder.itemName = "";
	itemAdder.itemQuanity = "";

	itemAdder.addItem = function(){
		shoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuanity);
		itemAdder.itemName = "";
		itemAdder.itemQuanity = "";
	};
};	

shoppingListShowCtrl.$inject = ['shoppingListService'];
function shoppingListShowCtrl(shoppingListService){
	var showList = this;

	showList.items = shoppingListService.getItems();

	showList.removeItem = function(itemIndex) {
		shoppingListService.removeItem(itemIndex);
	};
};

function shoppingListService() {
	var service = this;

	// List of items
	var items = [];

	service.addItem = function(itemName, quantity) {
		var item = {
			name: itemName,
			quantity: quantity
		};
		items.push(item);
	};

	service.getItems = function(){
		return items;
	};

	service.removeItem = function(itemIndex) {
		items.splice(itemIndex, 1);
	}
}


})();