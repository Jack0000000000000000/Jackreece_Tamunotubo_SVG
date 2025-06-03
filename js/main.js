console.log('wellcome to the main.js file');

// variable declaration

const frout = document.querySelectorAll('#characters div');
console.log(iconWrappers);
// function declaration 

function handleIconClick() {
  console.log('You clicked on: ' + this.id);
}

// event listeners 

frout.forEach(function(icon) {
  icon.addEventListener('click', handleIconClick);
});