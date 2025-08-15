const dialog = document.querySelector(".addBookDialog");
const showButton = document.querySelector("#showBookDialog");
const closeButton = document.querySelector("#hideBookDialog");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});