// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


class Book {
    constructor(title, genre, author, read, starReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || false;
        this.starReadDate = starReadDate || null;
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

}

let homeLibrary = new BookList();

homeLibrary.add(new Book("Book of Books", "Literature", "John Smith"));

homeLibrary.add(new Book("About Songs", "Instructional", "John Smith"));


console.log(homeLibrary);

// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

