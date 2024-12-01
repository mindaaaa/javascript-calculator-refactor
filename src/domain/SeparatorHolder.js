class SeparatorHolder {
  getSeparators(customSeparator) {
    return this.#createRegex(customSeparator);
  }

  #createRegex(customSeparator) {
    if (customSeparator) {
      return new RegExp(`[:,${customSeparator}]`);
    }
    return new RegExp(`[:,]`);
  }
}

export default SeparatorHolder;
