'use strict'

var app = new Vue({
  el: '#app',
  data: {
    list: [{
      id: 1,
      name: 'iphone7',
      price: 6188,
      count: 1
    },
    {
      id: 2,
      name: 'iphone7 Plus',
      price: 6888,
      count: 3
    },
    {
      id: 3,
      name: 'iphone 8',
      price: 7188,
      count: 1
    }
    ]
  },
  computed: {
    totalPrice: function () {
      let total = 0
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i]
        total += item.price * item.count
      }
      return total.toString().replace(/\B(?=(\d3{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce: function (index, row) {
      if (this.list[index].count === 1) return
      this.list[index].count--
    },
    handleAdd: function (index, row) {
      this.list[index].count++
    },
    handleRemove: function (index, row) {
      this.list.splice(index, 1)
    }
  }
})
