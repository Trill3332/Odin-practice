const addBookBtn = document.querySelector(".newBook");
const form = document.getElementById("bookForm");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const libraryContainer = document.getElementById("renderLibrary");

// Initialize the library array
let myLibrary = [];

// Book Constructor

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Modal event listeners
addBookBtn.addEventListener("click", () => modal.classList.add('open'));
closeBtn.addEventListener("click", () => modal.classList.remove('open'));
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});

// Form submission handling
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formValues = event.target.elements

  const newBook = new Book(
    formValues.title.value,  // Assign title correctly
    formValues.author.value,
    formValues.pages.value,   // Assign pages correctly
    formValues.read.checked
  );

  // Log the book object to check values (optional)
  console.log(newBook);

  myLibrary.push(newBook);
  renderBook(newBook);
  form.reset();
  modal.classList.remove('open');
});



const renderBook = (book) => {
    //Create Buttons to delete book and for read toggle
    let removeBookBtn = document.createElement("button")
    let btnNode = document.createElement("button")
    removeBookBtn.innerText = "Remove"

    //Create container to seperate each book entry
    let bookContainerDiv = document.createElement("div")
    // Add a class for styling in css and eventlistener handling
    bookContainerDiv.classList.add("bookContainer")
    removeBookBtn.classList.add("removeBookBtn")
    removeBookBtn.setAttribute("type","button")

    // Append div to the initial container 
    libraryContainer.appendChild(bookContainerDiv)

    //Look through the book information entered to display details
    for (const [key,value] of Object.entries(book)) {
        //Create a p tag for every detail and append to page.
        let pNode = document.createElement("p")

        //logic for displaying book info to screen
        if(key === "pages") {
          pNode.innerHTML = `Number of Pages: ` + `<span class="numberStyle">` + value + `</span>`
          pNode.classList.add("numPages")
      } else if(key === "read") {

          if(value) {
              btnNode.innerHTML = "Read: Yes"
              btnNode.style.backgroundColor = "limegreen"
          } else {
              btnNode.innerHTML = "Read: No"
              btnNode.style.backgroundColor = "Red"
          }

      } else if(key === "author"){
          pNode.innerHTML = `by ${value}`
          pNode.classList.add("bookAuthor")
      } else {
          pNode.innerHTML = value
          pNode.classList.add("bookTitle")
      }

      pNode.classList.add("bookDetail")
      btnNode.classList.add("readBtn")
      btnNode.setAttribute("type", "button")
      bookContainerDiv.append(pNode)
      bookContainerDiv.append(btnNode)
      bookContainerDiv.appendChild(removeBookBtn)
    }
}