(function (){
	var app = angular.module('store', []);
		app.controller('StoreController', function(){
			this.products = gems;
		});
		app.controller('PanelController', function(){
			this.tab = 1;

			this.selectTab = function(setTab){
				this.tab = setTab;
			}

			this.isSelected = function(checkTab) {
				return this.tab === checkTab;
			}
		});

	var gems = [
	{
		name: 'Gas Container',
		price: 19.99,
		description: 'Stores 5 gallons of petro.',
		canPurchase: true,
		soldOut: false,
		image: 'resources/images/Gem20.jpg'
	},
	{
		name: 'Lawn Mower',
		price: 299.99,
		description: 'John Deer Mower',
		canPurchase: true,
		soldOut: false,
		image: 'resources/images/Gem20.jpg'
	},
	{
		name: 'Edger',
		price: 102.00,
		description: 'Use to edge your lawn, EDGE your LAWN!!.',
		canPurchase: true,
		soldOut: false,
		image: 'resources/images/Gem20.jpg'
	}
	]
})();