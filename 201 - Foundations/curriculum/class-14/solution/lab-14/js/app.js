'use strict';

// State object keeps track of the application state (all available products and current state of the user's cart)
const state = {
  allProducts: [],
  cart: null,
};

// Cart constructor.
const Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
  const newItem = new CartItem(product, quantity);
  this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function () {
  localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function (item) {
  // In this implementation, the item parameter is the index of the item to be removed.
  this.items.splice(item, 1);
};

Cart.prototype.updateCounter = function () {
  document.getElementById('itemCount').textContent = '(' + this.items.length + ')';
};

const CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
};

function generateCatalog() {
  let bag = new Product('assets/bag.jpg', 'bag');
  let banana = new Product('assets/banana.jpg', 'banana');
  let bathroom = new Product('assets/bathroom.jpg', 'bathroom');
  let boots = new Product('assets/boots.jpg', 'boots');
  let breakfast = new Product('assets/breakfast.jpg', 'breakfast');
  let bubblegum = new Product('assets/bubblegum.jpg', 'bubblegum');
  let chair = new Product('assets/chair.jpg', 'chair');
  let cthulu = new Product('assets/cthulhu.jpg', 'cthulhu');
  let dogDuck = new Product('assets/dog-duck.jpg', 'dog-duck');
  let dragon = new Product('assets/dragon.jpg', 'dragon');
  let pen = new Product('assets/pen.jpg', 'pen');
  let petSweep = new Product('assets/pet-sweep.jpg', 'pet-sweep');
  let scissors = new Product('assets/scissors.jpg', 'scissors');
  let shark = new Product('assets/shark.jpg', 'shark');
  let sweep = new Product('assets/sweep.png', 'sweep');
  let tauntaun = new Product('assets/tauntaun.jpg', 'tauntaun');
  let unicorn = new Product('assets/unicorn.jpg', 'unicorn');
  let waterCan = new Product('assets/water-can.jpg', 'water-can');
  let wineGlass = new Product('assets/wine-glass.jpg', 'wine-glass');
  state.allProducts.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
