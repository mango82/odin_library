function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let myLibrary = ["Book1","Book2"];
    //empty array to add books to

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

console.log(addBookToLibrary())
console.log(myLibrary)