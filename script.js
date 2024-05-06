const input = document.querySelectorAll('input');
const submit = document.querySelector('submit');
const form = document.querySelector('form');
const main = document.querySelector("main");
const removeBook = document.querySelector("button");
const newBookBtn = document.querySelector(".newBookBtn");
const fieldset = document.querySelector("fieldset");

const myLibrary = [
    // {
    //     title: "Let Us C",
    //     author: "Yashwant k",
    //     genre: "Comp Science",
    //     pages: 430,
    //     read: "Yes"
    // },
    // {
    //     title: "Data Structure",
    //     author: "Narasimha",
    //     genre: "Engineering",
    //     pages: 512,
    //     read: "No"
    // },
];

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = input[0].value;
    let author = input[1].value;
    let genre = input[2].value;
    let pages = parseInt(input[3].value);
    let read = input[4].value;

    const bookNew = new Book(title, author, genre, pages, read);
    myLibrary.push(bookNew);

    displayBooks()
}


function displayBooks() {
    myLibrary.forEach((book) => {
        if(book === myLibrary[myLibrary.length - 1]) {
            let section = document.createElement('section');
            section.classList.add("bookInfo");
            main.appendChild(section);
    
            let title = document.createElement('h4');
            title.textContent = book.title;
            section.appendChild(title);
    
            let author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;
            section.appendChild(author);
    
            let genre = document.createElement('p');
            genre.textContent = `Genre: ${book.genre}`;
            section.appendChild(genre);
    
            let pages = document.createElement('p');
            pages.textContent = `Pages: ${book.pages}`;
            section.appendChild(pages);
    
            let read = document.createElement('p');
            read.textContent = `Status: ${book.read}`;
            section.appendChild(read);
        }
    })
}


form.addEventListener("submit", (e) => {
    
    addBookToLibrary();
    e.preventDefault();
    newBookBtn.style.display = "block"
    fieldset.style.display = "none";
})

newBookBtn.addEventListener("click", () => {
    fieldset.style.display = "block";
    newBookBtn.style.display = "none";
})