#!/usr/bin/env node
import { Command } from 'commander';
import { generateCommand } from '../src/commands/generate.js';
import showInfo from '../src/commands/info.js';
import createConfig from '../src/commands/init.js';

const program = new Command();

program
    .name('infy')
    .description('Custom React CLI Tool')
    .version('1.0.0');

program
    .command('g <type> <name>')
    .alias('generate')
    .option('-e, --extension <extension>', 'Specify file extension (js, jsx, ts, tsx)', 'jsx')
    .description('Generate a component, hook, or page')
    .action((type, name, options) => {
        generateCommand(type, name, options);
    });

program
  .command('config')
  .description('Create CLI config file (.infyrc.json)')
  .action(createConfig);

program
  .command('info')
  .description('Show CLI info')
  .action(showInfo);


program.parse(process.argv);
