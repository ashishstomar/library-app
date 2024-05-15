const input = document.querySelectorAll('input');
const submit = document.querySelector('submit');
const form = document.querySelector('form');
const main = document.querySelector("main");
const removeBook = document.querySelector("button");
const newBookBtn = document.querySelector(".newBookBtn");
const fieldset = document.querySelector("fieldset");
const closeFormBtn = document.querySelector("#closeFormBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const readtoggle = document.querySelector("#readtoggle");

const myLibrary = [];

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
    let read = document.querySelector('input[name="isRead"]:checked').value;

    const bookNew = new Book(title, author, genre, pages, read);
    myLibrary.push(bookNew);
    displayBooks()
    console.log(Book.id)
}


function displayBooks() {
    myLibrary.forEach(book => {
        if(book === myLibrary[myLibrary.length - 1]) {
            let section = document.createElement('section');
            section.classList.add("bookInfo");
            main.appendChild(section);
            
            let divMenuContainer = document.createElement('div');
            section.appendChild(divMenuContainer);

            let icon = document.createElement('i');
            divMenuContainer.appendChild(icon);
            icon.classList.add('threeDots');
            icon.addEventListener('click', () => {
                ul.style.display = ul.style.display === 'block'? 'none' : 'block';
            })

            let ul = document.createElement('ul');
            divMenuContainer.appendChild(ul);
            ul.classList.add('threeDotsOptions');
    
            let liRead = document.createElement('li')
            ul.appendChild(liRead);
            let readBtn = document.createElement('button')
            liRead.appendChild(readBtn);
            readBtn.classList.add('readBtn');
            readBtn.textContent = 'Read';
            
            let liDelete = document.createElement('li');
            ul.appendChild(liDelete);
            let deleteBtn = document.createElement('button');
            liDelete.appendChild(deleteBtn);
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                deleteBook()
            })


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
    e.preventDefault();
    addBookToLibrary();
    
})

newBookBtn.addEventListener("click", () => {
    fieldset.style.display = "flex";
    newBookBtn.style.display = "none";
})

closeFormBtn.addEventListener("click", () => {
    fieldset.style.display = "none";
    newBookBtn.style.display = "block";
})

function deleteBook() {
    main.addEventListener('click', (e) => {
        if(e.target.classList === 'deleteBtn') {
            console.log(e.target.classList)
        }
    })
}