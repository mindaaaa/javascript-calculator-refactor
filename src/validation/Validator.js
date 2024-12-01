class Validator {
  validateInput(userInput, customSeparator = null) {
    const regex = this.#createRegex(customSeparator);

    if (!regex.test(userInput)) {
      throw new Error('입력 형식에 어긋납니다.');
    }
  }

  validateResult(result) {
    if (isNaN(result)) {
      throw new Error('결과가 숫자가 아닙니다.');
    }
  }

  #createRegex(customSeparator) {
    if (customSeparator) {
      return /^\/\/(.)\\n/;
    }
    return /\s|^\d+([,:]\d+)*$/;
  }
}

export default Validator;
