'use strict';

const assert = require('assert');
const { I } = inject();


Given('I am on home page', () => {
  I.amOnPage('/');
});



Then(/I see (\w+) image (\d+) with width of (\d+) pixels and height of (\d+) pixels/, async (element, imageNum, width, height) => {

  const rect = await I.grabElementBoundingRect(`//img[contains(@src, 'place-hold.it/${width}x${height}')]`);

  assert(rect.width == width);

  assert(rect.height == height);

});

Then('I see {string}', (elementText) => {
  I.see(elementText);
});
