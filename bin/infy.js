#!/usr/bin/env node
import { Command } from 'commander';
import { generateCommand } from '../src/commands/generate.js';
import showInfo from '../src/commands/info.js';
import createConfig from '../src/commands/init.js';
import { packageVersion } from '../src/utils/get-version.js'

const program = new Command();

program
    .name('infy')
    .description('Custom React CLI Tool')
    .version(packageVersion);

program
    .command('g <type> <name>')
    .alias('generate')
    .description('Generate a component, hook, or page')
    .action((type, name) => {
        generateCommand(type, name);
    });

program
    .command('init')
    .description('Create CLI config file (.infyrc.json)')
    .action(createConfig);

program
    .command('info')
    .description('Show CLI info')
    .action(showInfo);


program.parse(process.argv);
