import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import Blueprint from "../factory/Blueprint.js";
import { readAndReplace, writeFile } from '../utils/file.js';

export async function generateCommand(type, name) {

    if (!type || !name) {
        console.log(chalk.red('❌ Usage: infy g <type> <name>'));
        console.log(chalk.gray('Example: infy g component Button'));
        return;
    }

    const parsedName = path.basename(name);
    const blueprint = await Blueprint.generate(type, name);

    if (!blueprint) {
        return
    }

    const { src, dest } = blueprint

    await fs.ensureDir(path.dirname(dest));

    let content = await readAndReplace(src, parsedName)

    await writeFile(dest, content, name, type);

}
