var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    message2: 'Hi Tere',
    showSpan: '',
    bindedClass: '',
    isShowing: true,
    withVShow: true,
    withVIf: true,
    counter: 0
  },
  methods: {
    click() {
      this.message = `Hi Pino, clicked ${this.counter++} times!`
    },
    showingSpan() {
      if (this.isShowing) {
        this.showSpan = 'display: none;'
        this.bindedClass = ''
        this.isShowing = false
      } else {
        this.bindedClass = 'myClass'
        this.showSpan = ''
        this.isShowing = true
      }
    }
  }
})