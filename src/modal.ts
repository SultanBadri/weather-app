const modal = <HTMLDivElement>document.querySelector(".error-modal");
const xIcon = <HTMLDivElement>document.querySelector(".close-modal");
const closeButton = <HTMLButtonElement>document.querySelector("button");
const overlay = <HTMLDivElement>document.querySelector("#overlay");
let modalOpen = false;

function toggleErrorModal() {
  if (modalOpen) {
    modal.style.transform = "scale(0)";
    overlay.style.opacity = "0";
  } else {
    modal.style.transform = "scale(1)";
    overlay.style.opacity = "1";
  }
}

xIcon.addEventListener("click", () => {
  modal.style.transform = "scale(0)";
  overlay.style.opacity = "0";
});
closeButton.addEventListener("click", () => {
  modal.style.transform = "scale(0)";
  overlay.style.opacity = "0";
});

export { toggleErrorModal, modal, overlay, modalOpen };
