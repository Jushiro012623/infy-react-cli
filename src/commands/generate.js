import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import Blueprint from "../factory/Blueprint.js";
import { readAndReplace, writeFile } from '../utils/file.js';

export async function generateCommand(type, name, options) {

    if (!type || !name) {
        console.log(chalk.red('❌ Usage: infy g <type> <name>'));
        console.log(chalk.gray('Example: infy g component Button'));
        return;
    }

    const ext = options.extension.toLowerCase();
    const parsedName = path.basename(name);

    if (!['js', 'jsx', 'ts', 'tsx'].includes(ext)) {
        console.log(chalk.red(`❌ Invalid extension: ${ext}`));
        console.log(chalk.gray('Valid extensions: js, jsx, ts, tsx'));
        return false;
    }

    const blueprint = await Blueprint.generate(type, name, ext);

    if (!blueprint) {
        return
    }

    const { src, dest } = blueprint

    await fs.ensureDir(path.dirname(dest));

    let content = await readAndReplace(src, parsedName)

    await writeFile(dest, content, name, type);

}
