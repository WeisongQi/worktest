// mehrwertsteuer.test.js

const { mwst, brutto } = require('../src/mehrwertsteuer');

test('7% VAT of 100 should be 7', () => {
  expect(mwst(100, 0.07)).toBe(7);
});

test('19% VAT of 200 should be 38', () => {
  expect(mwst(200, 0.19)).toBe(38);
});

test('VAT of 0 should be 0', () => {
  expect(mwst(0)).toBe(0);
});

test('100 net at 19% should be 119 gross', () => {
  expect(brutto(100, 0.19)).toBe(119);
});

test('50 net at 7% should be 53.5 gross', () => {
  expect(brutto(50, 0.07)).toBe(53.5);
});