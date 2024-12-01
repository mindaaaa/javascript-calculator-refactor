import ConsoleInput from './infrastructure/ConsoleInput.js';
import ConsoleOutput from './infrastructure/ConsoleOutput.js';
import Validator from './validation/Validator.js';
import CustomSeparator from './domain/CustomSeparator.js';
import SeparatorHolder from './domain/SeparatorHolder.js';
import OperandCreator from './domain/OperandCreator.js';
import Calculator from './domain/Calculator.js';

// validator
// customseparator
// separatorHolder
// operandCreator
// calculator
class App {
  async run() {
    ConsoleOutput.print('---프로그램 시작---');
    try {
      // 입력
      const userInput = await ConsoleInput.read(
        '덧셈할 문자열을 입력해 주세요.\n'
      );
      ConsoleOutput.print(`입력 값: ${userInput}`);

      const validator = new Validator();
      validator.validate(userInput);
      ConsoleOutput.print('검증 완료');

      const customSeparator = new CustomSeparator();
      const separatorHolder = new SeparatorHolder(customSeparator.extract());
      const separators = separatorHolder.getSeparators();

      ConsoleOutput.print(`구분자 목록: ${separators.join(' ')}`);

      const operandCreator = new OperandCreator(userInput, separators);
      const numbers = operandCreator.createOperands(userInput, separators);
      ConsoleOutput.print(`숫자 배열: ${numbers}`);

      const calculator = new Calculator(numbers);
      const result = calculator.sum(numbers);
      ConsoleOutput.print(`계산 결과: ${result}`);

      ConsoleOutput.print('---프로그램 종료---');
    } catch (error) {
      ConsoleOutput.printError(error);
    }
  }
}

export default App;
// class App {
//   async run() {
//     const userInput = await Console.readLineAsync(
//       '덧셈할 문자열을 입력해 주세요.\n'
//     );

//     const customSeparator = getCustomSeparator(userInput);
//     const formattedUserInput = customSeparator
//       ? userInput.replace(/^\/\/\D\\n/, '')
//       : userInput;

//     try {
//       validateUserInput(customSeparator, formattedUserInput);
//       const result = computeResult(customSeparator, formattedUserInput);
//       Console.print(`결과 : ${result}`);
//     } catch (error) {
//       Console.print('[ERROR]');
//       throw error;
//     }
//   }
// }

// export default App;

// export function getCustomSeparator(userInput) {
//   const customSeparator = userInput.match(/^\/\/(\D)\\n/);

//   return Array.isArray(customSeparator) && customSeparator.length
//     ? customSeparator[1]
//     : null;
// }

// export function validateUserInput(customSeparator, formattedUserInput) {
//   const regex = customSeparator
//     ? new RegExp(`\\s|^\\d+([,:${customSeparator}]\\d+)*$`)
//     : /\s|^\d+([,:]\d+)*$/;

//   if (!formattedUserInput.match(regex)) {
//     throw new Error('[ERROR]');
//   }
// }

// export function computeResult(customSeparator, formattedUserInput) {
//   const regex = customSeparator
//     ? new RegExp(`[:,${customSeparator}]`)
//     : new RegExp(`[:,]`);

//   const result = formattedUserInput
//     .split(regex)
//     .map(Number)
//     .reduce((acc, cur) => acc + cur, 0);

//   if (isNaN(result)) {
//     throw new Error('[ERROR]');
//   }

//   return result;
// }
