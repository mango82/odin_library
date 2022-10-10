function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 242, true)
const theMartian = new Book("The Martian", "Jeremey", 124, false)

let myLibrary = [theHobbit, theMartian];
    //empty array to add books to

book = document.createElement("div")
book.classList.add("card-container")
const refresh = document.getElementById("refresh")

refresh.addEventListener("click", function(){
    refreshLibrary()
})

const newBook = document.getElementById("new-book")
newBook.addEventListener("click", function(){
    addBookToLibrary()
})


function addBookToLibrary(){
    //gets user prompt and adds book to array
    let newBook = new Book(
        prompt("Title:"),
        prompt("Author:"),
        prompt("Pages:"),
        prompt("Read:"),
    )
    myLibrary.push(newBook)
    refreshLibrary()

    //add button to remove book from array
}
const deleteButton = document.getElementsByClassName("delete-button")
const library = document.getElementById("library")

function refreshLibrary(){
    library.innerHTML = ""
    addLibrary()
    removeLibrary()   
}

const statusButton = document.getElementsByClassName("status-box")
function updateReadStatus(){
    for (let i = 0; i < myLibrary.length; i++){
        if(statusButton[i].checked === true){
            myLibrary[i].read = true
        }
        else{
            myLibrary[i].read = false
        }
        console.log(myLibrary[i].read)
        console.log(myLibrary)
    }
}

function addLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
            book.innerHTML = 
            "<div class='book-info'>Title: " + myLibrary[i].title + "</div>" 
            + "<div class='book-info'>Author: " + myLibrary[i].author + "</div>" 
            + "<div class='book-info'>Amount of pages: " + myLibrary[i].pages + "</div>" 
            + "<div class='book-info'>Read Status: " + "<input type='checkbox' checked class='status-box' onclick='updateReadStatus()'>" + "</div>" 
            + "<button class='delete-button' data-id=" + [i] + ">Delete</button>"
            library.appendChild(book.cloneNode(book))
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


// let theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "255 pages", "Not read")
// console.log(theHobbit.info())

