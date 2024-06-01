document.addEventListener("click", modalToogler);
const modals = document.querySelectorAll([
  "[data-first-modal]",
  "[data-second-modal]",
  "[data-third-modal]",
]);

function modalToogler(event) {
  const element = event.target.classList;
  switch (element[0]) {
    case "first-btn":
      modals[0].classList.remove("is-hidden");
      return;
    case "second-btn":
      modals[1].classList.remove("is-hidden");
      return;
    case "third-btn":
      modals[2].classList.remove("is-hidden");
      return;
    case "backdrop":
      modals[0].classList.add("is-hidden");
      modals[1].classList.add("is-hidden");
      modals[2].classList.add("is-hidden");
      return;
    case "btn-close":
      modals[0].classList.add("is-hidden");
      modals[1].classList.add("is-hidden");
      modals[2].classList.add("is-hidden");
      return;
    default:
      return;
  }
}

// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     const modals = [
//       "data-first-modal",
//       "data-second-modal",
//       "data-third-modal",
//     ];

//     modals.forEach((element) => {
//       const openModalSelector = element + "-open";
//       const closeModalSelector = element + "-close";

//       const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
//       const closeModalBtns = document.querySelectorAll(
//         `[${closeModalSelector}]`
//       );
//       const modal = document.querySelector(`[${element}]`);

//       // if (!modal) logModalError("Can`t find Modal with attribute " + modal);
//       // if (openModalBtns.length === 0)
//       //   logModalError(
//       //     "Can`t find Open modal button with attribute " + openModalSelector
//       //   );
//       // if (closeModalBtns.length === 0)
//       //   logModalError(
//       //     "Can`t find Close modal button with attribute " + closeModalSelector
//       //   );
//       // if (!modal || openModalBtns.length === 0 || closeModalBtns.length === 0)
//       //   return;
//       console.log(element);
//       const backdrop = document.querySelector(`[${element}]`);
//       backdrop.addEventListener("click", toggleModalBackdrop);

//       openModalBtns.forEach((openBtn) =>
//         openBtn.addEventListener("click", toggleModal)
//       );
//       closeModalBtns.forEach((closeBtn) =>
//         closeBtn.addEventListener("click", toggleModal)
//       );

//       function toggleModal() {
//         document.body.classList.toggle("modal-open");
//         modal.classList.toggle("is-hidden");
//       }

//       function toggleModalBackdrop(e) {
//         if (e.currentTarget === e.target) {
//           document.body.classList.toggle("modal-open");
//           modal.classList.toggle("is-hidden");
//         }
//       }
//     });
//   },
//   false
// );

// function logModalError(text) {
//   const styles = "color: #bada55";
//   console.log("%c" + text, styles);
// }
