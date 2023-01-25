/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = localStorage.cart ? new Cart(JSON.parse(localStorage.cart)) : new Cart([]);

if (state.cart.items) {
  state.cart.updateCounter();
  for (let i = 0; i < state.cart.items.length; i++) {
    updateCartPreview(state.cart.items[i]);
  }
}

function populateForm() {

  // Add an <option> tag inside the form's select for each product

  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    const option = document.createElement('option');
    option.value = state.allProducts[i].name;
    option.textContent = state.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

function handleSubmit(event) {
  // Prevent the page from reloading
  event.preventDefault();

  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview(state.cart.items[state.cart.items.length - 1]);
  event.target.reset();
}

// Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  const item = document.getElementById('items').value;
  const quantity = document.getElementById('quantity').value;
  state.cart.addItem(item, quantity);
}

// TODO: Show the selected item & quantity in the cart div
function updateCartPreview(item) {
  const product = item.product;
  const quantity = item.quantity;
  const cartOutput = document.getElementById('cartContents');
  const itemElement = document.createElement('div');
  itemElement.textContent = quantity + ': ' + product;
  cartOutput.appendChild(itemElement);
}

const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);



populateForm();
