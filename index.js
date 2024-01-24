let knjige = document.querySelector('.books');

let h1 = document.querySelector('#h1');
h1.innerText += "'s Jusuf";

//Button za brisanje
let dugme = document.querySelectorAll('.del-btn')

dugme.forEach(function(btn){
    btn.addEventListener('click', function() {
        let knjiga = btn.parentElement.parentElement;
        knjiga.parentNode.removeChild(knjiga);
    })
})

let link = document.querySelector('#link');

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target.textContent);
})

//Dodavanje knjiga

let forma = document.querySelector('#drugi');

forma.addEventListener('submit', (e)=> {
    e.preventDefault();
    const vrijednost = forma.querySelector('input[type="text"]').value;

        //Dodavanje elemenata
        const book = document.createElement('div');
        const first = document.createElement('div');
        const second = document.createElement('div');
        const line = document.createElement('div');
        const p = document.createElement('p');
        const button = document.createElement('button');

        //Appendati elemente
        book.appendChild(first);
        book.appendChild(second);
        first.appendChild(line);
        first.appendChild(p);
        second.appendChild(button);
        knjige.appendChild(book);

        //Dodavanje teksta
        p.textContent = vrijednost;
        button.textContent = 'Delete';

        //Dodavanje klasa
        book.classList.add('book');
        first.classList.add('first');
        second.classList.add('second');
        line.classList.add('line');
        p.classList.add('naziv');
        button.classList.add('del-btn');

})

//Skrivanje knjiga
let kockica = document.querySelector('#hide');
kockica.addEventListener('change', function(e){
    if(kockica.checked){
        knjige.style.display = 'none';
    } else {
        knjige.style.display = 'initial';
    }
})

//Trazenje knjiga
const searchBox = document.forms['prvi'].querySelector('input');

searchBox.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = knjige.getElementsByClassName('book');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})

