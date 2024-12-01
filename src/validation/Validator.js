class Validator {
  validate(userInput, customSeparator = null) {
    const regex = this.#createRegex(customSeparator);

    if (!regex.test(userInput)) {
      throw new Error('입력 형식에 어긋납니다.');
    }
  }

  #createRegex(customSeparator) {
    if (customSeparator) {
      return new RegExp(`\\s|^\\d+([,:${customSeparator}]\\d+)*$`);
    }
    return /\s|^\d+([,:]\d+)*$/;
  }
}

export default Validator;
