class OperandCreator {
  createOperands(input, customSeparator, separators) {
    const formattedInput = this.#formatUserInput(input, customSeparator);

    return formattedInput.split(separators).map(Number);
  }

  #formatUserInput(input, customSeparator) {
    if (customSeparator) {
      return input.replace(/^\/\/\D\\n/, '');
    }
    return input;
  }
}

export default OperandCreator;
