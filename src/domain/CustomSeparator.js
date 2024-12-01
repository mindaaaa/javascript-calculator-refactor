class CustomSeparator {
  extract(input) {
    return this.#getCustomSeparator(input);
  }

  #getCustomSeparator(input) {
    const customSeparator = input.match(/^\/\/(.)\\n/);

    if (customSeparator && customSeparator[1]) {
      return customSeparator.match[1];
    }

    return null;
  }
}

export default CustomSeparator;
