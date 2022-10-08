function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
Book.prototype.info = function(){
    console.log(this.title)
    console.log(this.author)
    console.log(this.pages)
    console.log(this.read)
}
let theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "255 pages", "Not read")
console.log(theHobbit.info())