Vue.directive('demo', {
// Vue.elementDirective('demo', {
  bind: function () {
  //   // this.message = this.el.innerHTML
    $(this).css("color:#fff")
    this.el.style.backgroundColor = this.arg
    console.log(this)

  },
  update: function (value) {
  	console.log(this)
    this.el.innerHTML =
      'name - '       + this.name + '<br>' +
      'raw - '        + this.raw + '<br>' +
      'expression - ' + this.expression + '<br>' +
      'argument - '   + this.arg + '<br>' +
      'value - '      + this.el.innerHTML
  }
})




var app = new Vue({
	el:'#krypto',
	data:{
		msg: 'hello!',
		targetCard:0,
		card1:1,
		sign1: "+",
		card2:2,
		sign2: "+",
		card3:3,
		sign3: "+",
		card4:4,
		sign4: "+",
		card5:5
	},
	computed:{
		results: function () {
			return " " + this.card1 + this.sign1  + this.card2 + this.sign2  + this.card3 + this.sign3  + this.card4 + this.sign4  + this.card5;
		},
		total: function() {
			return eval(this.card1 + this.sign1  + this.card2 + this.sign2  + this.card3 + this.sign3  + this.card4 + this.sign4  + this.card5)
		}

	},
	methods: {
		solve: function () {
			this.card1 + this.sign1  + this.card2 + this.sign2  + this.card3 + this.sign3  + this.card4 + this.sign4  + this.card5
		}
	}
})


