// Declare a factory function that returns an object literal
const createCalc = () => {
    // The returned object has 4 methods
    return {
      add(x, y) {
        return x + y;
      },
      substract(x, y) {
        return x - y;
      },
      multiply(x, y) {
        return x * y;
      },
      divide(x, y) {
        return x / y;
      }
    };
  };

  module.exports = createCalc;