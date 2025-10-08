import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

export const rootDir = process.cwd();

export const readAndReplace = async (src, name) => {

    let content = await fs.readFile(src, 'utf-8');
    return content.replace(/__NAME__/g, name);
}

export const writeFile = async (dest, content, name, type) => {

    const relativePath = path.relative(rootDir, dest);

    if (await fs.pathExists(dest)) {
        console.log(chalk.yellow(`⚠️ "${name}" already exists at ${relativePath}`));
        console.log(chalk.gray('Use a different name or remove the existing file.'));
        return;
    }
    
    await fs.writeFile(dest, content);
    
    console.log(chalk.green(`✅ ${type} ${name} created at ${relativePath}`));

}