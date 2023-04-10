import Validator from '../validation';

const received = new Validator();

test('getting true with proper username', () => {
  expect(received.validateUsername('user65_jsr-garm')).toBeTruthy();
});

test('getting false with username starting with a digit', () => {
  expect(received.validateUsername('1user54-fdg_dfeE')).toBeFalsy();
});

test('getting false with username starting with a dash', () => {
  expect(received.validateUsername('-user54-fdg_dfeE')).toBeFalsy();
});

test('getting false with username starting with an underline', () => {
  expect(received.validateUsername('_user54-fdg_dfeE')).toBeFalsy();
});

test('getting false with username ending with an underline', () => {
  expect(received.validateUsername('user54-fdg_dfeE_')).toBeFalsy();
});

test('getting false with username ending with a dash', () => {
  expect(received.validateUsername('user54-fdg_dfeE-')).toBeFalsy();
});

test('getting false with username ending with a digit', () => {
  expect(received.validateUsername('user54-fdg_dfeE3')).toBeFalsy();
});

test('getting false with username with more than 3 digits in a row', () => {
  expect(received.validateUsername('user5434-fdg_dfeE')).toBeFalsy();
});
