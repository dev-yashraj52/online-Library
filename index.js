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
    this.id = crypto.randomUUID();
    this.bookUrl = bookUrl;
    this.bookTitle = bookTitle;
    this.bookDescription = bookDescription;
    this.bookPrice = bookPrice;
}

function addBookToLibrary(bookUrl, bookTitle, bookDescription, bookPrice) {
    const newBook = new Book(bookUrl, bookTitle, bookDescription, bookPrice);
    myLibrary.push(newBook);
    renderBook();
    console.log(newBook);
}

function renderBook() {
    for (item of myLibrary) {
        const bookItem = document.createElement("div");
        bookItem.className = 'book-item';
        bookItem.innerHTML = `<img src="${item.bookUrl}" alt="book-image" class="book-image">
                    <div class="book-info">
                        <p class="book-title">${item.bookTitle}</p>
                        <p class="book-desc">${item.bookDescription}</p>
                        <p class="book-price">₹${item.bookPrice}</p>
                        <button class="deleteButton" data-id="${item.id}" onclick="deleteBook(this.dataset.id)">Delete</button>
                    </div>`;

        const bookShelf = document.querySelector(".book-shelf");
        bookShelf.appendChild(bookItem);


        console.log(`${item.id}\n${item.bookUrl}\n${item.bookTitle}\n${item.bookDescription}\n${item.bookPrice}\n`);
    }
}

//get new book data on addBookButton Click

const addBookButton = document.querySelector("#addBookButton");

addBookButton.addEventListener("click", () => {
    const url = document.querySelector("#image-url");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const price = document.querySelector("#price");

    // console.log(`${url.value}\n${title.value}\n${description.value}\n${price.value}`);

    addBookToLibrary(url.value, title.value, description.value, price.value)

    //reset the input values

    url.value = "";
    title.value = "";
    description.value = "";
    price.value = "";

    dialog.close();
});


//delete button click function

function deleteBook(bookId) {
    console.log(bookId);
}