let newBook;
const addBookBtn = document.getElementById('addBookBtn')
const form = document.getElementById('addBookForm')
const bookContainer = document.querySelector('.books-container')
const overlay = document.getElementById('overlay')
//constructor
const myLibrary = [];
function Book(title,author,pages,read = false) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

addBookBtn.addEventListener('click',addOverlay);
function addOverlay() {
    form.classList.add('active');
    overlay.style.display = 'block';
}
window.addEventListener('click' , (event) => {
    if(event.target !== form && event.target !== addBookBtn) {
        form.classList.remove('active');
        overlay.style.display = 'none'
    }
})
form.addEventListener('submit',(event) => {
    event.preventDefault();
    let formValue = event.target.elements;
    newBook = new Book(
        formValue.title,
        formValue.author,
        formValue,pages,
        formValue.checked
    )
    
    myLibrary.push(newBook)


})

function renderBook() {
    
}