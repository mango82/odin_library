function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let myLibrary = [];
    //empty array to add books to

book = document.createElement("div")
book.classList.add("card-container")
const refresh = document.getElementById("refresh")

refresh.addEventListener("click", function(){
    refreshLibrary()
})

const newBook = document.getElementById("new-book")
newBook.addEventListener("click", function(){
    openForm()
})

const addBook = document.getElementById("addBook")
addBook.addEventListener("click", e => {
    addBookToLibrary()
    bookForm.reset()
    
})

function addBookToLibrary(){
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read-status").checked
    let newBook = new Book(
        title,
        author,
        pages,
        read,
    )
    myLibrary.push(newBook)
    refreshLibrary()
}
const deleteButton = document.getElementsByClassName("delete-button")
const library = document.getElementById("library")

// adds and removes cards from array and display 
function refreshLibrary(){
    library.innerHTML = ""
    addLibrary()
    removeLibrary()   
}

function addLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].read === true){
            book.innerHTML = 
            "<div class='book-info'>Title: " + myLibrary[i].title + "</div>" 
            + "<div class='book-info'>Author: " + myLibrary[i].author + "</div>" 
            + "<div class='book-info'>Amount of pages: " + myLibrary[i].pages + "</div>" 
            + "<div class='book-info'>Read Status: " + "<input type='checkbox' checked class='status-box' onclick='updateReadStatus()'>" + "</div>" 
            + "<button class='delete-button' data-id=" + [i] + ">Delete</button>"
            library.appendChild(book.cloneNode(book))
        }
        else {
            book.innerHTML = 
            "<div class='book-info'>Title: " + myLibrary[i].title + "</div>" 
            + "<div class='book-info'>Author: " + myLibrary[i].author + "</div>" 
            + "<div class='book-info'>Amount of pages: " + myLibrary[i].pages + "</div>" 
            + "<div class='book-info'>Read Status: " + "<input type='checkbox' class='status-box' onclick='updateReadStatus()'>" + "</div>" 
            + "<button class='delete-button' data-id=" + [i] + ">Delete</button>"
            library.appendChild(book.cloneNode(book))
        }
        }
}
function removeLibrary(){
    let button = document.getElementsByClassName("delete-button")
    for (let i = 0; i < myLibrary.length; i++){
        button[i].addEventListener("click", e =>{
            book.setAttribute("data-index", "" +[i]+ "")
            let index = book.dataset.index
            myLibrary.splice(index, 1)
            e.target.parentNode.remove()
            })
        }
}

const statusButton = document.getElementsByClassName("status-box")
// updates array depending on if button is checked or not
function updateReadStatus(){
    for (let i = 0; i < myLibrary.length; i++){
        if(statusButton[i].checked === true){
            myLibrary[i].read = true
        }
        else{
            myLibrary[i].read = false
        }
    }
}

const closeButton = document.getElementById("closeForm")
closeButton.addEventListener("click", e =>{
    closeForm()
})

const bookForm = document.getElementById("bookForm")
const libraryBody = document.getElementById("body")

function openForm() {
    bookForm.style.display = "flex";
    document.getElementById("formContainer").style.zIndex = "0"
    libraryBody.style.opacity = "0.1"

}
  
function closeForm() {
    bookForm.style.display = "none";
    document.getElementById("formContainer").style.zIndex = "-1"
    libraryBody.style.opacity = "1"
}