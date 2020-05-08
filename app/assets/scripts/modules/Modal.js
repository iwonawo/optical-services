class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.events()
  }

  events() {
    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())
    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
    <div class="modal__inner">
      <div class="modal__close">X</div>
      <h2 class="headline headline--modal headline--centered headline--violet">How Can We Help?</h2>
      <h4 class="headline headline--centered headline--small headline--small-modal headline--narrow">Wheather you have a question about products, services, pricing, or anything else, our team is ready to answer all youre questions.</h4>
          <form class="form">
            <div class="form__group">
              <input autofocus type="text" class="form__input" placeholder="Name" id="name" autocomplete="off" required>
              <label for="name" class="form__label">Name</label>
            </div>
            <div class="form__group">
              <input type="email" class="form__input" placeholder="Email address" id="email" autocomplete="off" required>
              <label for="email" class="form__label">Email address</label>
            </div>
            <div class="form__group">
              <input type="subject" class="form__input" placeholder="Subject" id="subject" autocomplete="off" required>
              <label for="subject" class="form__label">Subject</label>
            </div>
            <div class="form__group">
              <textarea class="form__input" placeholder="Message" id="message" rows="4" autocomplete="off" required></textarea>
            </div>
            <div class="row">
              <div class="row__large-6">
                <div class="form__group form__checkbox-group">
                  <input type="checkbox" class="form__checkbox-input" id="checkbox" checked>
                  <label for="checkbox" class="form__checkbox-label">
                    <span class="form__checkbox-button"></span>
                    Sign up for a Newsletter
                  </label>
                </div>
              </div>
              <div class="row__large-6">
                <div class="form__group">
                  <button class="btn btn--modal">Send Message</button>
                </div>
              </div>
            </div>
        </form>

      <div class="modal__inner-address">
        <h2 class="headline headline--modal headline--centered headline--white">Drop In Our Shop</h2>
        <div class="office office--t-b-margin">
          <div class="office__content-container">
            <div class="office-item office-item--white-text office-item--b-margin">
              <img data-src="assets/images/icons/location.svg" class="office-item__icon lazyload" alt="">
              <p><a href="#">Building 123, 1st Floor</a></p>
              <p>Business Bay, Dubai</p>
              <p>United Arab Emirates</p>
            </div>
            <div class="office-item office-item--white-text office-item--b-margin">
              <img data-src="assets/images/icons/whatsapp.svg" class="office-item__icon lazyload" alt="">
              <p>555 123 456</p>
            </div>
            <div class="office-item office-item--white-text office-item--b-margin">
              <img data-src="assets/images/icons/phone.svg" class="office-item__icon lazyload" alt="">
              <p>432 11 00</p>
            </div>
          </div>
        </div>
        <div class="social-icons social-icons--small social-icons--t-margin-small">
          <a href="#" class="social-icons__icon"><img data-src="assets/images/icons/facebook.svg" class="icon lazyload" alt="Facebook"></a>
          <a href="#" class="social-icons__icon"><img data-src="assets/images/icons/twitter.svg" class="icon lazyload" alt="Twitter"></a>
          <a href="#" class="social-icons__icon"><img data-src="assets/images/icons/instagram.svg" class="icon lazyload" alt="Instagram"></a>
          <a href="#" class="social-icons__icon"><img data-src="assets/images/icons/google-plus.svg" class="icon lazyload" alt="google-plus"></a>
        </div>
      </div>
    </div>    
  </div>
    `)
  }
}

export default Modal