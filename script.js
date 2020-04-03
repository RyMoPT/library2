// let myLibrary = []
// //using class instead of constructor
// class Book {
//     constructor (title,author,year,read) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//         this.read = read;
//     }
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


const submitBtn = document.querySelector('#enterBook')
const testtt=document.querySelector('.sidebar')
const form = document.querySelector('#newBooks')
const container = document.querySelector('.bookContainer');
const closeSidebarBtn = document.querySelector('.closeSidebarBtn')
const sidebar = document.querySelector('.sidebar')
const titleBox = document.querySelector('.titleBox');
const authorBox = document.querySelector('.authorBox');
const yearBox = document.querySelector('.yearBox');

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// })

let myLibrary = [];

class Book {
    constructor(title, author,year, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = read;
    }
}

function renderAll() {
  myLibrary.forEach((element,index,array)=> {
    // if (index===array.length-1) {
        var books = document.createElement('div');
        var theTitle = document.createElement('div');
        var theAuthor = document.createElement('div');
        var theYear = document.createElement('div');
        var removeBtn = document.createElement('span');
        var readToggleBox = document.createElement('label');
        var readToggleInput = document.createElement('input');
        var divForRemove = document.createElement('div');
        var readToggleSlider = document.createElement('span');

        theTitle.innerHTML = element.title;
        theAuthor.innerHTML = element.author;
        theYear.innerHTML = element.year;
        removeBtn.innerHTML= '&times';

        divForRemove.appendChild(removeBtn);
        // books.appendChild(removeBtn);
        books.appendChild(divForRemove);
        books.appendChild(theTitle);
        books.appendChild(theAuthor);
        books.appendChild(theYear);
        books.appendChild(readToggleBox);
        readToggleBox.appendChild(readToggleInput);
        readToggleBox.appendChild(readToggleSlider);
        
        books.classList.add('books');
        theTitle.classList.add('title');
        theAuthor.classList.add('author');
        theYear.classList.add('year');            
        removeBtn.classList.add('close');
        readToggleBox.classList.add('switch');
        readToggleInput.setAttribute('type', 'checkbox')
        readToggleSlider.classList.add('slider')
        readToggleSlider.classList.add('round')


      //setting number to each book
        books.setAttribute('data-index', index)


        container.appendChild(books);


        removeBtn.addEventListener('click', function (e) {
          console.log('data attribute index is' + books.getAttribute('data-index'));
          //remove book from library array
          removeBook(books.getAttribute('data-index'));
          //remove div of book
          container.removeChild(books);

      //Resets data-indcies to match changed indicies of myLibrary after removing one of the books
      let resettingBooks = document.querySelectorAll('.books')
      console.log(resettingBooks)
      console.log('trying to get index of book ' + books.getAttribute('data-index'));

      for (i=0; i < myLibrary.length; i++){
          resettingBooks[i].setAttribute('data-index', `${i}`);
      }
      console.log(resettingBooks);
        
    })
  // }


})
}



function render () {

    myLibrary.forEach((element,index,array)=> {
        if (index===array.length-1) {
            var books = document.createElement('div');
            var theTitle = document.createElement('div');
            var theAuthor = document.createElement('div');
            var theYear = document.createElement('div');
            var removeBtn = document.createElement('span');
            var readToggleBox = document.createElement('label');
            var readToggleInput = document.createElement('input');
            var readToggleSlider = document.createElement('span');

            theTitle.innerHTML = element.title;
            theAuthor.innerHTML = element.author;
            theYear.innerHTML = element.year;
            removeBtn.innerHTML= '&times';

            books.appendChild(removeBtn);
            books.appendChild(theTitle);
            books.appendChild(theAuthor);
            books.appendChild(theYear);
            books.appendChild(readToggleBox);
            readToggleBox.appendChild(readToggleInput);
            readToggleBox.appendChild(readToggleSlider);
            
            books.classList.add('books');
            theTitle.classList.add('title');
            theAuthor.classList.add('author');
            theYear.classList.add('year');            
            removeBtn.classList.add('close');
            readToggleBox.classList.add('switch');
            readToggleInput.setAttribute('type', 'checkbox')
            readToggleSlider.classList.add('slider')
            readToggleSlider.classList.add('round')


          //setting number to each book
            books.setAttribute('data-index', index)


            container.appendChild(books);


            removeBtn.addEventListener('click', function (e) {
              console.log('data attribute index is' + books.getAttribute('data-index'));
              //remove book from library array
              removeBook(books.getAttribute('data-index'));
              //remove div of book
              container.removeChild(books);

          //Resets data-indcies to match changed indicies of myLibrary after removing one of the books
          let resettingBooks = document.querySelectorAll('.books')
          console.log(resettingBooks)
          console.log('trying to get index of book ' + books.getAttribute('data-index'));

          for (i=0; i < myLibrary.length; i++){
              resettingBooks[i].setAttribute('data-index', `${i}`);
          }
          console.log(resettingBooks);
            
        })}


    })
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  var storedLibrary = JSON.parse(localStorage.getItem("array"));
  storedLibrary.splice(index, 1)
  localStorage.setItem('array',JSON.stringify(storedLibrary));
}

const validateForm = () => {
  let form = document.querySelector('#enterBook')
  if (form[0].value || form[1].value || form[2].value ==='') {
    return false;
  }
}



const addBookToLibrary = (e) =>{
  e.preventDefault();
  let title, author, pages, read;
  title = document.querySelector('#name').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#year').value;
  myLibrary.push(new Book(title, author, pages, read));
  localStorage.setItem('array', JSON.stringify(myLibrary));
render();
}

form.addEventListener("submit",addBookToLibrary)

// submitBtn.addEventListener('click', (e)=> {
//     myLibrary.push(
//         new Book(
//             form[0].value,
//             form[1].value,
//             form[2].value,
//         )
//     )
//     localStorage.setItem('array', JSON.stringify(myLibrary));
// render();
// })


// localStorage.setItem('title', myLibrary.form[0].value),
// localStorage.setItem('author', myLibrary.form[1].value),
// localStorage.setItem('year', myLibrary.form[2].value)

if(!localStorage.getItem('array')) {
  renderAll();
} else {
  pullLibrary();
}

function pullLibrary() {
  var storedLibrary = JSON.parse(localStorage.getItem("array"));
  console.log(storedLibrary)
  console.log(myLibrary)
  myLibrary=storedLibrary;
//   for (i=0; i <storedLibrary.length; i++) {
// myLibrary.push(storedLibrary[i])
  // }
  // myLibrary=storedLibrary;
  renderAll()
}
