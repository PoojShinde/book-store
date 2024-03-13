// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.
// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.


// Author constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  // Book constructor
  function Book(title, author, genre, price) {
    this.title =  title;
    this.author  = author;
    this.genre = genre;
    this.price = price;
  }
  Book.prototype.getBookInfo = function() {
    console.log(`title : ${this.title}`);
    console.log(`author name:${Author.name}`);
    console.log(`genre: ${this.genre} `);
    console.log(`Price: ${this.price}`);
    console.log("********************************")
  }
  let author1 = new  Author('George Orwell', 1903, 'British');
  let author2=new Author ('Ravindar singh', 1947, 'indian') ;
  let book1 = new Book('1984', author1,'Dystopia', 15.6);
  let book2 = new Book('2008',author2,'i too had a love story',213)
  
 book1.getBookInfo();
 book2.getBookInfo();