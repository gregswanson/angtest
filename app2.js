(function(){
angular.module('shopApp', [])
.controller('shoppingListCtrl1', shoppingListCtrl1)
.controller('shoppingListCtrl2', shoppingListCtrl2)
.factory('shoppingListFactory', shoppingListFactory)
.directive('listItemDescription', listItemDescription)
.directive('listItem', listItem);

//directive 1
function listItemDescription(){
	var ddo =  {
		template: '{{ item.quantity }} of {{ item.name }}'
	};
	return ddo;
};

//directive 2
function listItem(){
	var ddo = {
		templateUrl: 'listItem.html'
	};
	return ddo;
};


//list 1 controller
shoppingListCtrl1.$inject = ['shoppingListFactory'];
function shoppingListCtrl1(shoppingListFactory) {
	var list1 = this;

	//use factory to create new shopping list service
	var shoppingList = shoppingListFactory();

	list1.items = shoppingList.getItems();

	list1.itemName = "";
	list1.itemQuantity = "";

	list1.addItem = function(){
		shoppingList.addItem(list1.itemName, list1.itemQuantity);
		console.log(list1.items);
	};
	list1.removeItem = function(itemIndex){
		shoppingList.removeItem(itemIndex);
	};
};

//list 2 controller
shoppingListCtrl2.$inject =['shoppingListFactory'];
function shoppingListCtrl2(shoppingListFactory){
	var list2 = this;

	//use factory to create new shopping list service
	var shoppingList = shoppingListFactory(3);

	list2.items = shoppingList.getItems();

	list2.itemName = "";
	list2.itemQuantity = "";

	list2.addItem = function(){
		try{
			shoppingList.addItem(list2.itemName, list2.itemQuantity);
		} catch (error) {
			list2.errorMessage = error.message;
		}
	};
	list2.removeItem = function(itemIndex){
		shoppingList.removeItem(itemIndex);
	};
}

//if not specified items are assumed unlimited
function shoppingListService(maxItems){
	var service = this;

	//list of items
	var items = [];

	service.addItem = function(itemName, quantity) {
		if((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)){
			var item = {
				name: itemName,
				quantity: quantity
			};
			items.push(item);
		} else {
			throw new Error("Max items (" + maxItems + ") reached!");
		}
	};

	service.removeItem = function (itemIndex) {
		items.splice(itemIndex, 1);
	};

	service.getItems = function() {
		return items;
	};
}

function shoppingListFactory() {
	var factory = function(maxItems) {
		return new shoppingListService(maxItems)
	};

	return factory;
}

})();