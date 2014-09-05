(function (){
	// modules
	var app = angular.module('store', []);

	// controllers
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
	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	// custom directives
	app.directive('productTitle', function() {
		return {
			restrict: 'E', // E for element
			templateUrl: 'resources/templates/product-title.html' // url of the template
		};
	});

	app.directive('productImage', function() {
		return {
			restrict: 'E', // E for element
			templateUrl: 'resources/templates/product-image.html' // url of the template
		};
	});

	app.directive('productPrice', function() {
		return {
			restrict: 'E', // E for element
			templateUrl: 'resources/templates/product-price.html' // url of the template
		};
	});

	var gems = [
	{
		name: 'Aquamarine',
		price: 19.99,
		description: 'A beautiful gem.',
		canPurchase: true,
		soldOut: false,
		image: 'resources/images/Gem20.jpg',
		reviews : [
			{
				stars: 5,
				body: 'This product is awesome!!',
				author: 'dizzle@dazzle.com'
			},
			{
				stars: 4,
				body: 'Packaged really well.',
				author: 'dizzle@dazzle.com'
			},
		]
	},
	{
		name: 'Black Opal',
		price: 299.99,
		description: 'A beautiful gem.',
		canPurchase: true,
		soldOut: false,
		image: 'resources/images/Gem20.jpg',
		reviews : [
			{
				stars: 3,
				body: 'This product is not so awesome.',
				author: 'dizzle@dazzle.com'
			}
		]
	},
	{
		name: 'Kyanite',
		price: 102.00,
		description: 'A beautiful gem.',
		canPurchase: true,
		soldOut: false,
		image: 'resources/images/Gem20.jpg',
		reviews : [
			{
				stars: 5,
				body: 'Just bought a replacement for my last Kyanite, does the trick.',
				author: 'dizzle@dazzle.com'
			}
		]
	}
	]
})();