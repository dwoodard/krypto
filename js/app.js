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
	computed:{
		results: {
			get: function() {
				return 
				this.card1 + " " + this.card2 + " " + this.card3 + " " + this.card4 + " " + this.card5 ;
			}
		}
	},
	methods: {
		solve: function () {
			this
		}
	}
	
})


Vue.directive('my-directive', {
  bind: function () {
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
  },
  update: function (newValue, oldValue) {
    // do something based on the updated value
    // this will also be called for the initial value
  },
  unbind: function () {
    // do clean up work
    // e.g. remove event listeners added in bind()
  }
})