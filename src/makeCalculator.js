'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    result: 0,

    add(num) {
      return num + result;
    },

    subtract(num) {
      return result - num;
    },

    multiply(num) {
      return num * result;
    },

    divide(num) {
      if (num === 0) {
        throw new Error('Division by zero is not allowed.');
      }

      return result / num;
    },

    operate(operationCallback, operand) {
      result = operationCallback(operand);
      this.result = result;

      return this;
    },

    reset() {
      result = 0;
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
