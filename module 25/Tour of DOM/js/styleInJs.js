// querySelectorAll style
const sections = document.querySelectorAll('section');
for (const section of sections) {
  section.style.border = '2px solid skyBlue';
  section.style.borderRadius = '10px';
  section.style.marginBlockStart = '4px';
  section.style.backgroundColor = 'lightGray';
  // console.log(section);
}

// querySelector
const query = document.querySelector('.famous');
query.style.color = 'black';

// const allNames = document.getElementById('names');
// allNames.style.backgroundColor = 'yellowGreen';

// Element: classList property
const allNames = document.getElementById('names');
allNames.classList.add('text');
allNames.classList.remove('large-text');

// Node: childNodes property
const names = document.getElementById('names');
names.firstChild;
names.childNodes[2];
names.childNodes[2].nextSibling;

// Document: createElement() method
const productList = document.querySelector('#product-container ul');
productList;
const li = document.createElement('li');
li.innerText = 'sound box';
li;
productList.appendChild(li);
// another createElement
const li2 = document.createElement('li');
li2.innerText = 'microphone';
productList.appendChild(li2);
// console.log(productList);

// parentNode
const parent = productList.parentNode;
// console.log(parent);
