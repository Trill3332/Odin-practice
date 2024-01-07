let newBook;
const addBookBtn = document.getElementById('addBookBtn')
const form = document.getElementById('addBookForm')
const bookContainer = document.getElementById('books-container')
const overlay = document.getElementById('overlay')

//constructor
const myLibrary = [];
function Book(title, author, pages, read = false) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

addBookBtn.addEventListener('click', addOverlay);
function addOverlay() {
    form.classList.add('active');
    overlay.style.display = 'block';
}
window.addEventListener('click', (event) => {
    if (!form.contains(event.target) && event.target !== addBookBtn) {
        form.classList.remove('active');
        overlay.style.display = 'none'
    }
})
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let isRead = document.getElementById('is-read').checked;

    newBook = new Book(title, author, pages, isRead)

    myLibrary.push(newBook)
    renderBook();
    form.classList.remove('active');
    overlay.style.display = 'none'
})

function renderBook() {
    myLibrary.forEach((book) => {
        let div = document.createElement('div');
        div.innerHTML = `Title : ${book.title}<br>
                         Author : ${book.author}<br>
                         Pages : ${book.pages}<br>
                         Read : ${book.read ? 'Yes' : 'No'}<br>`;
        bookContainer.appendChild(div)
    })
}