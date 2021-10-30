let myLibrary = []

const container = document.querySelector(".container")
const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")
const formContainer = document = document.querySelector("div.form")
const form = document = document.querySelector("div.form form")


addBookToLibrary("title1", "author1", "345")
addBookToLibrary("title2", "author2", "346")
addBookToLibrary("title3", "author3", "347")

addButton.addEventListener("click", function() {
    formContainer.classList.add("active");
})

removeButton.addEventListener("click", function() {
    formContainer.classList.remove("active")
})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let titleForm = document.getElementById("title").value
    let authorForm = document.getElementById("author").value
    let pagesForm = document.getElementById("pages").value
    addBookToLibrary(titleForm, authorForm, pagesForm)
    removeButton.click()
    // console.log(titleForm)
})

function addBookToLibrary(title, author, pages) {
    let newBook = new Book (title, author, pages, true)
    myLibrary.push(newBook)
    displayBook(newBook)

    let newBookCard  = document.querySelector(".book-card:last-child");
    let deleteBook = document.querySelector(".book-card:last-child .delete");
    let readButton = document.querySelector(".book-card:last-child .read");
   
        deleteBook.addEventListener("click", function(event) {
            // myLibrary.splice(event.target.getAttribute("data-index"))
            
            console.log(myLibrary.indexOf(newBook))
            console.log(myLibrary)

            if (myLibrary.splice(myLibrary.indexOf(newBook), 1)) {
                container.removeChild(newBookCard);
            }

            console.log(myLibrary)

            
        })
   
        readButton.addEventListener("click", function(event) {
        
            if (newBook.toggleRead() == false) {
                readButton.classList.add("false")
            } else {
                readButton.classList.remove("false")
            }
            console.log(newBook)
        })  
}

function displayBook(book) {
    let newBook = document.createElement("div")
    newBook.classList.add("book-card") 
    newBook.innerHTML = 
    `<h3>${book.title}</h3>
    <h4>${book.author}</h4>
    <p>Pages : <span>${book.pages}</span></p>
    <div>
        <button class="read">Read</button>
        <button class="delete">Delete</button>
    </div>`
    container.appendChild(newBook)
}


function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.toggleRead = function () {
    this.read = this.read? false: true;
    return this.read
}
