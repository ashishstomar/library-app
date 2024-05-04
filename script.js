const input = document.querySelectorAll('input');
const submit = document.querySelector('submit');
const form = document.querySelector('form');
const main = document.querySelector("main");


const myLibrary = [];
    // {
    //     title: "Let Us C",
    //     author: "Yashwant k",
    //     pages: 430,
    //     genre: "Comp Science",
    //     read: "Yes"
    // },
    // {
    //     title: "Data Structure",
    //     author: "Narasimha",
    //     pages: 512,
    //     genre: "Engineering",
    //     read: "No"
    // },
// ];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary() {
    let title = input[0].value;
    let author = input[1].value;
    let genre = input[2].value;
    let pages = input[3].value;
    let read = input[4].value;

    const bookNew = new Book(title, author, genre, pages, read);
    myLibrary.push(bookNew);

    displayBooks()
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
    
})

function displayBooks() {
    section.innerHTML = '';

    myLibrary.forEach((book) => {
        let section = document.createElement('section');
        section.innerHTML = `<h4>${book.title}</h4><p>${book.author}</p><p>${book.pages}</p></p><p>${book.genre}</p>`
        section.Classlist.add("bookInfo");
        main.appendChild(section);
        
    })
}

