// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books

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

let book1 = new Book("Cool Book", "fiction", "Donald Hutt");
let book2 = new Book("Fun Book", "fiction", "Miller Mutt");
let book3 = new Book("Fast Book", "Biography", "John Doe");
let book4 = new Book("Hard Book", "Non-fiction", "Sad Man");
let book5 = new Book("E-Book", "History", "Happy Man");


// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.


console.log(book1, book2, book3, book4, book5);