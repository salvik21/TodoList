require('@testing-library/jest-dom');

// Полифилл для TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

if (typeof global.Request === 'undefined') {
  global.Request = class {};
}
if (typeof global.Response === 'undefined') {
  global.Response = class {};
}
if (typeof global.fetch === 'undefined') {
  global.fetch = () => Promise.resolve();
}