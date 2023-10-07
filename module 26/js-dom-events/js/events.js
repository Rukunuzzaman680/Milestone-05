console.log('This is separate file');

// third method function
// IMPORTANT : we will use this
function makeRed() {
  document.body.style.backgroundColor = 'red';
}
// forth method function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}
// fifth method function
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = 'purple';
};
// sixth method function
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
  document.body.style.backgroundColor = 'pink';
}
// seventh method function
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
  document.body.style.backgroundColor = 'green';
});
// eighth method function
// IMPORTANT : we will use this sometimes
document.getElementById('make-orange').addEventListener('click', function () {
  document.body.style.backgroundColor = 'orange';
});
