let books = document.querySelector('.books');

let h1 = document.querySelector('#h1');
h1.innerText += "'s Jusuf";

//Button za brisanje
let del_button = document.querySelectorAll('.del-btn')

del_button.forEach(function(btn){
    btn.addEventListener('click', function() {
        let book1 = btn.parentElement.parentElement;
        book1.parentNode.removeChild(book1);
    })
})

//Dodavanje knjiga

let form = document.querySelector('#drugi');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const value = form.querySelector('input[type="text"]').value;

        //Adding elements
        const book = document.createElement('div');
        const first = document.createElement('div');
        const second = document.createElement('div');
        const line = document.createElement('div');
        const p = document.createElement('p');
        const button = document.createElement('button');

        //Appending elements
        book.appendChild(first);
        book.appendChild(second);
        first.appendChild(line);
        first.appendChild(p);
        second.appendChild(button);
        books.appendChild(book);

        //Adding text
        p.textContent = value;
        button.textContent = 'Delete';

        //Adding classes
        book.classList.add('book');
        first.classList.add('first');
        second.classList.add('second');
        line.classList.add('line');
        p.classList.add('naziv');
        button.classList.add('del-btn');

        button.addEventListener('click', function() {
            let knjiga = button.parentElement.parentElement;
            knjiga.parentNode.removeChild(knjiga);
        })
})

//Hiding books
let checkBox = document.querySelector('#hide');
checkBox.addEventListener('change', function(e){
    if(checkBox.checked){
        books.style.display = 'none';
    } else {
        books.style.display = 'initial';
    }
})

//Finding books
const searchBox = document.forms['prvi'].querySelector('input');

searchBox.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const finding_books = books.getElementsByClassName('book');
    Array.from(finding_books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})
