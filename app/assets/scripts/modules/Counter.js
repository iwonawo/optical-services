import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class Counter {
  constructor() {
    this.counters = document.querySelectorAll('.counter');
    this.speed = 800;

    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight
    }, 333))
  }

  calcCaller() {
    this.counters.forEach(el => {
      if (el.isReveald == false) {
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
      if (scrollPercent < 95) {
        this.counter()
        el.isReveald = true
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle)
          
        }
      }
    }
  }

  hideInitially() {
    this.counters.forEach(el => {
      el.isReveald = false
    })
    this.counters[this.counters.length -1].isLastItem = true
  }
  
  counter() {
    this.counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText
  
        const inc = target / this.speed
  
        if(count < target) {
          counter.innerText = Math.ceil(count + inc)
          setTimeout(updateCount, 1)
        } else {
          //count.innerText = target
          return
        }
      }

      updateCount()
      
    })
  }  
}
export default Counter