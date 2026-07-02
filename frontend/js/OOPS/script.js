class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
        }
    listAllBooks(){
        this.books.forEach(function(book){
            console.log(`${book.name}by ${book.author}`);
        });
    }
}
class Book{
    constructor(name,isbn,price,author){
        this.name=name;
        this.isbn=isbn;
        this.price=price;
        this.author=author;
        this.readStatus=false;
    }
    info(){
        console.log(
            `${this.name}is written by ${this.author}and the price is ${this.price} and you have ${this.readStatus?"read it" :"not read this book"}`)
    }
    chnageReadStatus(){
        this.readStatus=!this.readStatus;
    }
}
let jhansiLibrary= new Library()
let bangloreLibraby= new Library()
jhansiLibrary.addBook("sky")
bangloreLibraby.addBook("do epic shit")
//bangloreLibraby.listAllBooks();
let book1=new Book("wealth is life", "2ghsayudgeras",120,"ash")
let book2=new Book("adventure", "54sdfsdfsd",105,"addh")
let book3=new Book("gold", "5666eeeqwdgeras",150,"saah")
jhansiLibrary.addBook(book1);
jhansiLibrary.addBook(book2);
jhansiLibrary.addBook(book3)