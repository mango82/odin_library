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

const div = document.getElementById("div")
book = document.createElement("p")

const refresh = document.getElementById("refresh")
refresh.addEventListener("click", function(){
    book.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++){
    let myArray = Object.values(myLibrary[i])
    book.innerHTML += "<br>" + myArray
    div.appendChild(book)
    }
})

console.log(addBookToLibrary())
console.log(myLibrary)

function addBookToLibrary(){
    //gets user prompt and adds book to array
    let newBook = new Book(
        prompt("Title:"),
        prompt("Author:"),
        prompt("Pages:"),
        prompt("Read:"),
    )
    console.log(newBook)
    myLibrary.push(newBook)
    console.log(myLibrary)
    //add button to remove book from array
}




// let theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "255 pages", "Not read")
// console.log(theHobbit.info())

