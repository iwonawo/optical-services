class Services {
  
  constructor () {
    this.servicesItem = document.querySelectorAll('.services__item')
    this.events()
  }

  events() {
    this.servicesItem.forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('active-item')    
        this.siblings = this.getSiblings(el)
        this.siblings.forEach(sibling => {
          sibling.classList.remove('active-item')
        })
      })
    })
  }  

  getSiblings(e) {
    // for collecting siblings
    let siblings = []
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling)
      }
      sibling = sibling.nextSibling
    }
    return siblings;
  }
}

export default Services