export default class Mailform {
  // Constructor always gets called, pass initial params here
  constructor(_elem) {
    this.elem = _elem;
    this.config = _elem.dataset.config ? JSON.parse(_elem.dataset.config) : {};
    this.elemOverlay;
    this.closeButtonHTML;
    this.minemarkStorage = { mailChimpSeen: false };
    this.initialize();
  }

  initialize() {
    this.minemarkStorage =
      JSON.parse(localStorage.getItem("minemarkStorage")) !== null
        ? JSON.parse(localStorage.getItem("minemarkStorage"))
        : { mailChimpSeen: false, mailChimpDate: new Date() };
    this.elemOverlay = document.createElement("div");
    this.elemOverlay.className = "mailform__overlay";
    this.elem.prepend(this.elemOverlay);
    /* eslint-disable */
    this.closeButtonHTML = document.createElement("div");
    this.closeButtonHTML.id = "btn_close";
    this.closeButtonHTML.className = "btn_close";
    this.closeButtonHTML.innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>`;
    /* eslint-enable */
    const formInner = document.getElementById("mc_embed_signup_scroll");
    formInner.append(this.closeButtonHTML);
    this.addEvents();
  }

  addEvents() {
    if (!this.minemarkStorage.mailChimpSeen) {
      window.addEventListener("scroll", () => {
        this.handleScroll();
      });
    }

    this.closeButtonHTML.onclick = () => {
      this.closeMailChimp();
    };

    this.elemOverlay.onclick = () => {
      this.closeMailChimp();
    };

    document.onkeydown = (e) => {
      if (e.key === "Escape") {
        this.closeMailChimp();
      }
    };
  }

  handleScroll() {
    if (this.minemarkStorage.mailChimpSeen === true) return;

    if (scrollY > 800) {
      this.showMailChimp();
    }
  }

  showMailChimp() {
    this.elem.style.display = "block";
  }

  closeMailChimp() {
    this.elem.style.display = "none";
    this.minemarkStorage.mailChimpSeen = true;
    localStorage.setItem(
      "minemarkStorage",
      JSON.stringify(this.minemarkStorage)
    );
  }

  deselectButtons() {
    for (const btn of this.donateButtons) {
      btn.classList.remove("active");
    }
  }

  setActiveButton(trgt) {
    this.currentAmount = trgt.dataset.amount;
    this.deselectButtons();
    trgt.classList.add("active");
    this.updateButton();
  }

  updateButton() {
    this.donateButton.innerHTML = `DONATE € ${this.currentAmount},- NOW`;
  }

  donate() {
    switch (this.currentAmount) {
      case 10:
        window.open(
          "https://useplink.com/payment/G1HpNOH2BRVr6aMEK72D/",
          "_blank"
        );
        break;
      case 20:
        window.open(
          "https://useplink.com/payment/zIrLlYz5IgHQ7NC7omFK/",
          "_blank"
        );
        break;
      case 50:
        window.open(
          "https://useplink.com/payment/qqXv2CvKLAP2RwtVCTpZ/",
          "_blank"
        );
        break;
      default:
        window.open(
          `https://useplink.com/payment/RidtebYiHnVWedDLjoYz/EUR${this.currentAmount}`,
          "_blank"
        );
    }
  }
}
