new Vue({
	el: "#app",
	data: {
		total: 0,
		products: [
			{ title: "product 1", id: 1, price: 9.99 },
			{ title: "product 2", id: 2, price: 9.99 },
			{ title: "product 3", id: 3, price: 9.99 },
		],
		cart: [],
	},
	methods: {
		addToCart: function (product) {
			this.total += product.price;
			let found = false;
			for (let i = 0; i < this.cart.length; i++) {
				if(this.cart[i].id === product.id){
					this.cart[i].qty++;
					found = true;
				}
			}
			if(!found){
				this.cart.push({
					...product,
					qty: 1,
				});
			}
		},
	},
});
