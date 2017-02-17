(function(){
angular.module('shoppingListCheckOff', [])
.controller('toBuyController', toBuyController)
.controller('alreadyBoughtController', alreadyBoughtController)
.service('shoppingListCheckOffService', shoppingListCheckOffService);

//toBuyController
toBuyController.$inject = ['shoppingListCheckOffService'];
function toBuyController(shoppingListCheckOffService) {
	var list1 = this;

	list1.items = shoppingListCheckOffService.toBuyItems();
	
	list1.buy = function(itemIndex){
		shoppingListCheckOffService.buy(itemIndex);
	};

};


//alreadyBoughtController
alreadyBoughtController.$inject = ['shoppingListCheckOffService'];
function alreadyBoughtController (shoppingListCheckOffService) {
	var list2 = this;

	list2.items = shoppingListCheckOffService.boughtItems();

};


//shoppingListCheckOffService
function shoppingListCheckOffService() {
	var service = this;

	var items = [
			{name: 'cookies', quantity: 10},
			{name: 'cakes', quantity: 3},
			{name: 'apples', quantity: 10},
			{name: 'oranges', quantity: 3},
			{name: 'pears', quantity: 2},
			{name: 'bananas', quantity: 7},
			{name: 'soups', quantity: 4},
			{name: 'breads', quantity: 2},
			{name: 'coffees', quantity: 100},
			{name: 'teas', quantity: 10}
	];

	var purchased = [];

	var itemEmpty = false;
	var purchasedEmpty = true;
	
	service.toBuyItems = function(){
			return items;
		};

	service.boughtItems = function(){
		return purchased;
		};	

	service.buy = function(itemIndex) {
		purchased.push(items[itemIndex]);
		items.splice(itemIndex, 1);
		};
	};

})();