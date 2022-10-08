function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 242,"Not Read")
const theMartian = new Book("The Martian", "Jeremey", 124,"Read")

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
const button = document.createElement("button")
function refreshLibrary(){
    library.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++){
        let myArray = Object.values(myLibrary[i]) 
        book.innerHTML = "<div class='book-info'>" + myArray + "</div>" + "<button class='delete-button'>Delete</button>"
        library.appendChild(book.cloneNode(book))
    }
    library.addEventListener("click", e =>{
        if(e.target.classList.contains("delete-button")){
            e.target.closest("div").remove()
        }
    })
    
}



// let theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "255 pages", "Not read")
// console.log(theHobbit.info())

