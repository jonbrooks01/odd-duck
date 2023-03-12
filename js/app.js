'use strict';


// <!-- Global Variables -->
let numVotes = 25;

const state = {
  allProductsArray: [],
};

// <!-- DOM References -->

let imgBox = document.getElementById('products');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsBut = document.getElementById('resBut');
let resultsLi = document.getElementById('results-li');

// <!-- CONSTRUCTOR function -->

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.looks = 0;
  this.call = 0;
  this.img = `img/${name}.${fileExtension}`;

  state.allProductsArray.push(this);
};

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

console.log(state.allProductsArray);

// <!-- Helper function -->
// W3 Resources: Math.floor(Math.random()*items.length)
function getRandomNum() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderPics() {

  let numOne = getRandomNum();
  let numTwo = getRandomNum();
  let numThree = getRandomNum();

  if (numOne === numTwo) {
    numTwo = getRandomNum();
  } else if (numOne === numThree) {
    numThree = getRandomNum();
  } else if (numThree === numTwo) {
    numTwo = getRandomNum();
  }


  imgOne.src = state.allProductsArray[numOne].img;
  imgOne.alt = state.allProductsArray[numOne].name;
  state.allProductsArray[numOne].looks++;
  console.log(state.allProductsArray[numOne].looks++);

  imgTwo.src = state.allProductsArray[numTwo].img;
  imgTwo.alt = state.allProductsArray[numTwo].name;
  state.allProductsArray[numTwo].looks++;
  console.log(state.allProductsArray[numTwo].looks++);

  imgThree.src = state.allProductsArray[numThree].img;
  imgThree.alt = state.allProductsArray[numThree].name;
  state.allProductsArray[numThree].looks++;
  console.log(state.allProductsArray[numThree].looks++);
}


// <!-- Event Handler -->

function handleClick(event) {
  numVotes--;
  let pic = event.target.alt;
  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (pic === state.allProductsArray[i].name) {
      state.allProductsArray[i].call++;
      console.log(pic, state.allProductsArray[i].call);
    }
  }

  renderPics();
  // <!-- Listeners  -->

  if (numVotes === 0) {
    imgBox.removeEventListener('click', handleClick);
  }
  console.log(numVotes);
}

function handleResults() {
  if (numVotes === 0) {
    for (let i = 0; i < state.allProductsArray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${state.allProductsArray[i].name} had ${state.allProductsArray[i].call} votes, and was seen ${state.allProductsArray[i].looks} times. `;
      resultsLi.append(liElem);
    }
  }
}

imgBox.addEventListener('click', handleClick);
resultsBut.addEventListener('click',handleResults);



renderPics();

