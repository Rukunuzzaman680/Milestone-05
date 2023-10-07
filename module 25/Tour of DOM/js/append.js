// where to add element
const listItem = document.getElementById('product-list');
// what to be added
const itemName = document.createElement('li');
itemName.innerText = 'smartPhone';
// push to new item
productList.appendChild(itemName);

// new section add
const mainContainer = document.getElementById('main-container');
const sectionName = document.createElement('section');
// add heading
const h1Name = document.createElement('h1');
h1Name.innerText = 'My new food list';
sectionName.appendChild(h1Name);

// create ul
const ulName = document.createElement('ul');
// first li
const liName1 = document.createElement('li');
liName1.innerText = 'delicious';
ulName.appendChild(liName1);
// second li
const liName2 = document.createElement('li');
liName2.innerText = 'roast';
ulName.appendChild(liName2);
// third li
const liName3 = document.createElement('li');
liName3.innerText = 'salad';
ulName.appendChild(liName3);
// forth li
const liName4 = document.createElement('li');
liName4.innerText = 'cold drink';
ulName.appendChild(liName4);

sectionName.appendChild(ulName);
mainContainer.appendChild(sectionName);
sectionName.style.backgroundColor = 'lightGray';
sectionName.style.border = '2px solid skyBlue';
sectionName.style.borderRadius = '10px';
sectionName.style.marginTop = '5px';
sectionName.style.padding = '10px';

// // set innerHTML directly
const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
  <li>T-shirt</li>
  <li>Lungi</li>
  <li>Polo-shirt</li>
</ul>
`;
mainContainer.appendChild(sectionDress);
