import ConsoleInput from './infrastructure/ConsoleInput.js';
import ConsoleOutput from './infrastructure/ConsoleOutput.js';
import Validator from './validation/Validator.js';
import CustomSeparator from './domain/CustomSeparator.js';
import SeparatorHolder from './domain/SeparatorHolder.js';
import OperandCreator from './domain/OperandCreator.js';
import Calculator from './domain/Calculator.js';

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

      const separatorProcessor = new CustomSeparator();
      const customSeparator = separatorProcessor.extract(userInput);

      const separatorHolder = new SeparatorHolder();
      const separators = separatorHolder.getSeparators(customSeparator);

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

//   const result = formattedUserInput
//     .split(regex)
//     .map(Number)
//     .reduce((acc, cur) => acc + cur, 0);

//   if (isNaN(result)) {
//     throw new Error('[ERROR]');
//   }

//   return result;
// }
