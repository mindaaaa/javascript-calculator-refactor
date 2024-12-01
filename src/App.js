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
    try {
      const userInput = await ConsoleInput.read(
        '덧셈할 문자열을 입력해 주세요.\n'
      );
      ConsoleOutput.write(`입력 값: ${userInput}`);

      const validator = new Validator();
      validator.validate(userInput);
      ConsoleOutput.write('검증 완료');

      const customSeparator = new CustomSeparator();
      const separatorHolder = new SeparatorHolder(customSeparator.extract());
      const separators = separatorHolder.getSeparators();

      ConsoleOutput.write(`구분자 목록: ${separators.join(' ')}`);

      const operandCreator = new OperandCreator(userInput, separators);
      const numbers = operandCreator.createOperands(userInput, separators);
      ConsoleOutput.write(`숫자 배열: ${numbers}`);

      const calculator = new Calculator(numbers);
      const result = calculator.sum(numbers);
      ConsoleOutput.write(`결과: ${result}\n`);
    } catch (error) {
      ConsoleOutput.writeError(error.message);
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
