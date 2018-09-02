// new Vue({
//   el: '#app',
//   data: {
//     title: "Hello world!",
//     text: "Hello text!",
//     value: 1,
//     styleCSS: "",
//     show: true,
//     cars: [
//       {model: "BMW", speed: 260},
//       {model: "Audi", speed: 281},
//       {model: "Mercedes-Benz", speed: 260},
//       {model: "Ford", speed: 260}
//     ]
//   },
//   methods: {
//     changeText () {
//       this.text = 'Какой либо новый текст!'
//     },
//     increment (value) {
//       this.value = value
//       if (value == 25) {
//         alert("Число: " + 75);
//       }
//     }
//   },
//   computed: {
//     doubleValue () {
//       return this.value * 2
//     },
//     increment () {
//       return this.value
//     }
//   }
// });

new Vue ({
  el: '#app',
data: {
  text: "Hi!",
  show: false,
  couple: [
    {heigh: 186, weight: 80, name:"jake"},
    {heigh: 178, weight: 55, name:"jaina"}
  ]
},
computed: {
  textHello () {
    return this.text = "Hello wold!"
  }
},
methods: {
  textHelloM () {
    this.text = "Hello world 2!"
  }
},
filters: {
  trToUpperCase(value) {
    // value = value.toString()
    // return value.replace(/\b\w/g, function(k) { return k.toUpperCase() })
    return value.toUpperCase()
  }
}

});
