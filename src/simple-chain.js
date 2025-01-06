const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], // Initialize an empty array to hold the chain

  getLength() {
    return this.chain.length; // Return the length of the chain
  },

  addLink(value) {
    // Add a new link to the chain with the provided value
    this.chain.push(`( ${String(value)} )`);
    return this; // Enable chaining
  },

  removeLink(position) {
    // Check if position is valid
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = []; // Reset the chain if the position is invalid
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // Remove the link at the specified position
    return this; // Enable chaining
  },

  reverseChain() {
    this.chain.reverse(); // Reverse the order of the chain
    return this; // Enable chaining
  },

  finishChain() {
    const result = this.chain.join('~~'); // Join the chain into a string
    this.chain = []; // Reset the chain for future use
    return result; // Return the resulting string
  }
};

module.exports = {
  chainMaker
};