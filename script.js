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

let myLibrary = [];

function Book(id, title, author, genre, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let id = myLibrary.length;
    let title = input[0].value;
    let author = input[1].value;
    let genre = input[2].value;
    let pages = parseInt(input[3].value);
    let read = document.querySelector('input[name="isRead"]:checked').value;

    const bookNew = new Book(id, title, author, genre, pages, read);
    myLibrary.push(bookNew);
    displayBooks()
}


function displayBooks() {
    const bookCards = document.querySelector('.bookCards');
    bookCards.innerHTML = '';
    myLibrary.forEach(book => {
        let bookInfo = document.createElement('article');
        bookInfo.classList.add("bookInfo");
        bookCards.appendChild(bookInfo);
        
        let divMenuContainer = document.createElement('div');
        bookInfo.appendChild(divMenuContainer);

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
        readBtn.textContent = book.read === 'Unread' ? 'Read' : 'Unread';
        readBtn.onclick = () => {
            book.read = toggleRead(book.read);
            console.log(readBtn.textContent);
            displayBooks();
        }
        
        let liDelete = document.createElement('li');
        ul.appendChild(liDelete);
        let deleteBtn = document.createElement('button');
        liDelete.appendChild(deleteBtn);
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            deleteBook(book.id)
        }
        

        let title = document.createElement('h4');
        title.textContent = book.title;
        bookInfo.appendChild(title);
    
        let author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookInfo.appendChild(author);
    
        let genre = document.createElement('p');
        genre.textContent = `Genre: ${book.genre}`;
        bookInfo.appendChild(genre);
    
        let pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookInfo.appendChild(pages);
    
        let read = document.createElement('p');
        read.textContent = `Status: ${book.read}`;
        bookInfo.appendChild(read);
        
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

function deleteBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);;
    displayBooks();
}

function toggleRead(isRead) {
    if(isRead === 'Unread') {
       return 'Read';
    }
    else {
        return 'Unread'
    }
}