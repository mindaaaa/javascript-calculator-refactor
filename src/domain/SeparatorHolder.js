class SeparatorHolder {
  getSeparators(customSeparator) {
    console.log(`[SeparatorHolder] 구분자 목록 생성`);
    return [',', ':', customSeparator];
  }
}

export default SeparatorHolder;
