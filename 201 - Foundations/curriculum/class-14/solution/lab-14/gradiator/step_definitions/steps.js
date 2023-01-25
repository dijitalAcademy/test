'use strict';

const assert = require('assert');
const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

const { I } = inject();
// Add in your custom step files

Given('I am on home page', () => {
  I.amOnPage('/');
});

Given(/^I have selected (.+)$/, (product) => {

  I.selectOption('#items', product);
});

Given('I have entered quantity of {int}', (quantity) => {
  I.fillField('#quantity', quantity);
});

Given(/^I have already added (\d+) (.+) items$/, (quantity, product) => {

  I.selectOption('#items', product);

  I.fillField('#quantity', quantity);

  I.click('#catalog input[type=submit]');

});

When('I click add to cart button', () => {
  I.click('#catalog input[type=submit]');
});

Then('I should see {int} in cart', (num) => {
  I.see(`(${num})`, '#itemCount');
});

Then('I should see nothing in cart', () => {
  I.see('', '#itemCount');
});

Then(/^I should see (\d+): (.+) in right column$/, (quantity, product) => {
  I.see(`${quantity}: ${product}`, '#cartContents > div');
});


Then('I should see full product line', async () => {
  const optionTexts = await I.grabTextFrom('option');
  const optionValues = await I.grabAttributeFrom('option', 'value');

  assert.deepStrictEqual(optionTexts, productNames);
  assert.deepStrictEqual(optionValues, productNames);
});

When('I click on cart', () => {
  I.clickLink('a[href="cart.html"]');
});

Then('I should navigate to cart page', () => {
  I.seeInCurrentUrl('/cart');
});

Then(/I should see (\w+) in table/, (product) => {
  I.see(product, 'td');
});
