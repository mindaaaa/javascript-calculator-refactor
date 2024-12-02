class Validator {
  validateInput(userInput, customSeparator = null) {
    const regex = this.#createRegex(customSeparator);

    if (!regex.test(userInput)) {
      throw new Error('[ERROR] 입력 형식에 어긋납니다.');
    }
  }

  validatePositive(operands) {
    if (!this.#isPositive(operands)) {
      throw new Error('[ERROR] 양수만 입력할 수 있습니다.');
    }
  }

  validateResult(result) {
    if (isNaN(result)) {
      throw new Error('[ERROR] 결과가 숫자가 아닙니다.');
    }
  }

  #createRegex(customSeparator) {
    if (customSeparator) {
      return /^\/\/(.)\\n/;
    }
    return /\s|^\d+([,:]\d+)*$/;
  }

  #isPositive(operands) {
    return operands.every((operand) => operand > 0);
  }
}

export default Validator;
