// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise

class Book {
    constructor(title, author, pages) {
        this.title = title; 
        this.author = author;
        this.pages = pages;
        this.isAvailable = true; 
    }       
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed "${this.title}".`);
        }
        else {
            console.log(`Sorry, "${this.title}" is currently not available.`);
        }
    }           
    returnBook() {
        this.isAvailable = true;
        console.log(`You have returned "${this.title}".`);
    }
    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    isLongBook() {
        return this.pages > 300;
    }
}
//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
let book1 = new Book("Harry Potter", "J.K", 309);
let book2 = new Book("1984", "Geo", 328);
let book3 = new Book("The Hobbit", "J", 310);
let book4 = new Book("To Kill", "Lee", 281);
let book5 = new Book("The Great", "F", 180);

//   2. Perform the following operations:
//       i. Display info of all books
let books = [book1, book2, book3, book4, book5];
books.forEach(book => {
    console.log(book.getInfo());
});
//       ii. Borrow 2 books and show their availability status
book1.borrow();
book2.borrow();
console.log(`Is "${book1.title}" available? ${book1.isAvailable}`);
console.log(`Is "${book2.title}" available? ${book2.isAvailable}`);
//       iii. Return 1 book and show updated status
book1.returnBook();
console.log(`Is "${book1.title}" available? ${book1.isAvailable}`);
//       iv. Count how many books are "long books" (more than 300 pages)
let longBooks = books.filter(book => book.isLongBook());
console.log(`Number of long books: ${longBooks.length}`);
//       v. List all available books
let availableBooks = books.filter(book => book.isAvailable);
console.log("Available books:");
availableBooks.forEach(book => {
    console.log(book.getInfo());
});

