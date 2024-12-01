import { Console } from '@woowacourse/mission-utils';

class ConsoleInput {
  async read(consoleMessage) {
    //return await Console.readLineAsync(consoleMessage);
    Console.print(consoleMessage);
    return '//;\\n1;2;3';
  }
}

export default new ConsoleInput();
