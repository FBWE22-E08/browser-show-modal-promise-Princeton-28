import "./css/style.css"; //importing css

// **Instructions**

// - Create a promise that, once resolved, displays a modal to the user after the user spends 60 seconds on the page.
// - The modal already exists in index.html but is currently hidden.
// - Only work in index.js
// - Note: no need to use the reject option since we only need the resolve function for this exercise.

const myModal = document.querySelector(".modal");

const myPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((myModal.style.display = "block"));
    }, 60000);
  });
};

const MyPromiseResult = async () => {
  let result = await myPromise();
  console.log(result);
};

MyPromiseResult();

// - **BONUS** The user should be able to close the modal somehow :)

myModal.addEventListener(
  "click",
  function (event) {
    if (event.target.className === "myModal") {
      event.target.classList.remove();
    }
  },
  false
);

// list.addEventListener(
//     "click",
//     function (ev) {
//         if (ev.target.tagName === "LI") {
//             ev.target.classList.toggle("checked");
//           }
//     },
//     false
//   );
