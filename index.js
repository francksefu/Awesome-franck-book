import {
  addBtn, myBooks, addBook, contact, listLink, addLink, pdate, contactLink, h1, title, author,
} from './modules/declaration.js';
import Books from './modules/booksClasse.js';
import { DateTime } from './modules/luxonDate.js';

addBtn.addEventListener('click', () => {
  const title1 = title.value;
  const author1 = author.value;
  title.value = '';
  author.value = '';
  const obj = new Books(title1, author1);
  if (obj.title.length > 0 && obj.author.length > 0) {
    obj.add(myBooks);
  }
});

window.addEventListener('load', () => {
  listLink.style.color = 'blue';
  addBook.style.display = 'none';
  contact.style.display = 'none';
  h1.style.display = 'block';
  pdate.innerHTML = DateTime.now().toFormat('LLL dd, yyyy at');
  Books.loading(myBooks);
});

listLink.addEventListener('click', () => {
  listLink.style.color = 'blue';
  addLink.style.color = 'black';
  contactLink.style.color = 'black';
  myBooks.style.display = 'flex';
  addBook.style.display = 'none';
  contact.style.display = 'none';
  h1.style.display = 'block';
});

addLink.addEventListener('click', () => {
  addLink.style.color = 'blue';
  listLink.style.color = 'black';
  contactLink.style.color = 'black';
  myBooks.style.display = 'none';
  addBook.style.display = 'flex';
  contact.style.display = 'none';
  h1.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  contactLink.style.color = 'blue';
  listLink.style.color = 'black';
  addLink.style.color = 'black';
  myBooks.style.display = 'none';
  addBook.style.display = 'none';
  contact.style.display = 'flex';
  h1.style.display = 'none';
});
