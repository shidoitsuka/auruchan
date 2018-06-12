module.exports = (auru, message) => {
    // RANDOM
    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    };
};