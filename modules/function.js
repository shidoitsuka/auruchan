module.exports = (auru, message) => {
  
    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    /*
    The code base is from :
    https://github.com/shidoitsuka/another-miku-bot
    Thanks to him!! COOLAH CODAA!!! ^^--^^
    */
    };
};