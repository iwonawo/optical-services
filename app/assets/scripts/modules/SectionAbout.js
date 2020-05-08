class SectionAbout {

  constructor() {
    this.headlineAbout = document.querySelector(".headline--about")
    this.headlineVision = document.querySelector(".headline--vision")
    this.contentAbout = document.querySelector("#content-box--about")
    this.contentVision = document.querySelector("#content-box--vision")
    this.events()
    this.activeAbout()
  }

  events() {
    this.headlineAbout.addEventListener("click", () => this.activeAbout())
    this.headlineVision.addEventListener("click", () => this.activeVision())
  }

  activeAbout() {
    this.headlineAbout.classList.add("headline--active")
    this.headlineVision.classList.remove("headline--active")
    this.contentAbout.classList.add("active")
    this.contentVision.classList.remove("active")
  }
  activeVision() {
    this.headlineAbout.classList.remove("headline--active")
    this.headlineVision.classList.add("headline--active")
    this.contentVision.classList.add("active")
    this.contentAbout.classList.remove("active")
  }
}

export default SectionAbout