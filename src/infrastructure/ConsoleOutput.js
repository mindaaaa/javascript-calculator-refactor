import { Console } from '@woowacourse/mission-utils';

class ConsoleOutput {
  print(message) {
    Console.print(message);
  }

  printError(error) {
    Console.print(`[ERROR] ${error}`);
  }
}

export default new ConsoleOutput();
