// @ts-nocheck
const { Plugin } = require('powercord/entities');
const mathjs = require('mathjs');

module.exports = class PowerMath extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'math',
      aliases: [],
      description: 'Powercord calculator using math.js.',
      usage: '{c} [expression]',
      executor: (args) => ({ send: false,
        result: `Result: ${this.calc(args)}` })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('powermath');
  }

  calc (args) {
    const expression = args.join(' ');
    const result = mathjs.evaluate(expression);

    return `${expression} = ${result}`;
  }
};
