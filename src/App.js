import ConsoleInput from './infrastructure/ConsoleInput.js';
import ConsoleOutput from './infrastructure/ConsoleOutput.js';
import Validator from './validation/Validator.js';
import CustomSeparator from './domain/CustomSeparator.js';
import SeparatorHolder from './domain/SeparatorHolder.js';
import OperandCreator from './domain/OperandCreator.js';
import Calculator from './domain/Calculator.js';

class App {
  async run() {
    try {
      const userInput = await ConsoleInput.read(
        '덧셈할 문자열을 입력해 주세요.\n'
      );

      const separatorProcessor = new CustomSeparator();
      const customSeparator = separatorProcessor.extract(userInput);

      const validator = new Validator();
      validator.validateInput(userInput, customSeparator);

      const separatorHolder = new SeparatorHolder();
      const separators = separatorHolder.getSeparators(customSeparator);

      const operandCreator = new OperandCreator();
      const operandArray = operandCreator.createOperands(
        userInput,
        customSeparator,
        separators
      );

      validator.validatePositive(operandArray);

      const calculator = new Calculator();
      const result = calculator.sum(operandArray);

      validator.validateResult(result);
      ConsoleOutput.write(`결과 : ${result}`);
    } catch (error) {
      ConsoleOutput.writeError(error.message);
      throw error;
    }
  }
}

export default App;
