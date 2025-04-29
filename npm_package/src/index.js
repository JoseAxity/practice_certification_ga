/**
 * Prints a greeting message
 * @param {string} name - The name to greet (default: "World")
 * @returns {string} The greeting message
 */
function hello(name = 'World') {
    return `Hello, ${name}!`;
  }
  
  module.exports = { hello };