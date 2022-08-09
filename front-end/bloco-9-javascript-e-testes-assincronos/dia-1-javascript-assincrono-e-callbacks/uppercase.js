const upperCase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  module.exports = upperCase