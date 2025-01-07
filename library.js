class Book {
    constructor(title, author, status = "available") {
        this.title = title;
        this.author = author;
        this.status = status;
        this.borrowedDate = null;
    }

    markAsBorrowed() {
        this.status = "borrowed";
        this.borrowedDate = new Date();
    }

    markAsAvailable() {
        this.status = "available";
        this.borrowedDate = null;
    }

    calculateFine() {
        if (this.status === "borrowed" && this.borrowedDate) {
            const lateDays = Math.ceil((new Date() - new Date(this.borrowedDate).setDate(this.borrowedDate.getDate() + 14)) / (1000 * 60 * 60 * 24));
            return lateDays > 0 ? lateDays * 1 : 0;
        }
        return 0;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    borrowBook(title) {
        const book = this.books.find(book => book.title === title && book.status === "available");
        if (book) book.markAsBorrowed();
    }

    returnBook(title) {
        const book = this.books.find(book => book.title === title && book.status === "borrowed");
        if (book) {
            book.markAsAvailable();
            const fine = book.calculateFine();
            fine ? console.log(`Fine: $${fine}`) : console.log("Returned on time");
        }
    }

    searchBooks(query) {
        return this.books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()));
    }
}

let library = new Library();
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
let book2 = new Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);
library.borrowBook("1984");
library.returnBook("1984");
console.log(library.searchBooks("george"));
