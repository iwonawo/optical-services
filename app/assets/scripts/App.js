import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import SectionAbout from './modules/SectionAbout'
import TestimonialSlider from './modules/TestimonialSlider'
import Counter from './modules/Counter'
import Services from './modules/Services'


let mobileMenu = new MobileMenu()
let sectionAbout = new SectionAbout()
let services = new Services()
let counter = new Counter()
new RevealOnScroll(document.querySelectorAll(".services__item"), 90)

let modal
document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}


// // React Related Code Goes Here
// import React from 'react'
// import ReactDOM from 'react-dom'

// // Import React components that we created
// import MyReactComponent from './modules/MyReactComponent'

// ReactDOM.render(<MyReactComponent />, document.querySelector("#react-example"))