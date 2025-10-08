import chalk from 'chalk';
import Blueprint from '../factory/Blueprint.js';

export default function showInfo() {
    console.log(chalk.cyan('✨ Infy CLI Information'));
    console.log(chalk.gray('-----------------------'));
    console.log(chalk.green('CLI Version:'), '1.0.0');
    console.log(chalk.green('Node Version:'), process.version);
    console.log(chalk.green('Available Generators:'), Object.keys(Blueprint.types || {
        component: 'Component',
        hook: 'Hook',
        page: 'Page',
        provider: 'Provider'
    }).join(', '));
}
