// From 2.3
// Copy over all of the code from 2.3...

class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || false;
        this.startReadDate = startReadDate || null;
        this.endReadDate = endReadDate || null;
    }
}

class BookList {
    constructor() {
        this.booksRead = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBookRead = null;
        this.currentlyReading = null;
        this.upNext = null;
    }

    add = (book) => {
        this.books.push(book);
        if (book.read) {
            this.booksRead += 1;
        } else {
            this.booksUnread += 1;
        }


    }

    startReading = (title) => {
        this.currentlyReading = title;
        book.startReadDate = new Date(Date.now());
    }

    finishREading = (title) => {
        this.lastBookRead = title;
        book.endReadDate = new Date(Date.now());
        book.read = true;
        this.booksUnread -= 1;
        this.booksRead += 1;
    }

}

let homeLibrary = new BookList();

homeLibrary.add(new Book("Book of Books", "Literature", "John Smith"));

homeLibrary.add(new Book("About Songs", "Instructional", "John Smith"));


console.log(homeLibrary);


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
