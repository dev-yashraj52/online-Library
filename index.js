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



//book object

const myLibrary = [];

function Book(bookUrl, bookTitle, bookDescription, bookPrice) {
    this.bookUrl = bookUrl;
    this.bookTitle = bookTitle;
    this.bookDescription = bookDescription;
    this.bookPrice = bookPrice;
}

function addBookToLibrary() {

}

//get new book data on addBookButton Click

const addBookButton = document.querySelector("#addBookButton");

addBookButton.addEventListener("click", () => {
    const url = document.querySelector("#image-url");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const price = document.querySelector("#price");

    console.log(`${url.value}\n${title.value}\n${description.value}\n${price.value}`);

    url.value = "";
    title.value = "";
    description.value = "";
    price.value = "";
    // dialog.close();
});
