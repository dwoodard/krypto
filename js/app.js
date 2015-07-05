var app = new Vue({
	el:'#krypto',
	data:{
		targetCard:0,
		card1:0,
		sign1: "",
		card2:0,
		sign2: "",
		card3:0,
		sign3: "",
		card4:0,
		sign4: "",
		card5:0
	},
	compiled:{
		results: function() {
			return 'test';
		}
	}
	// filters:{},
	// methods:{

	
})


var Card = Vue.extend({
  template: '<p>A custom component!</p>'
})