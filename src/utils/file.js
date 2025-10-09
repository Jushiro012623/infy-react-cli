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


export const readConfig = async () => {
    const configPath = path.join(rootDir, '.infyrc.json')

    let paths = {
        component: 'src/components',
        hook: 'src/hooks',
        page: 'src/pages',
        provider: 'src/provider'
    };

    let fileExtension = 'jsx'

    if (await fs.pathExists(configPath)) {
        try {
            const config = await fs.readJson(configPath);

            if (config.paths) {
                paths = { ...paths, ...config.paths }; // merge overrides
            }

            if (config.extension) {
                fileExtension = config.extension
            }


        } catch (err) {
            console.log(chalk.yellow(`⚠️ Invalid .infyrc.json format — using default paths.`));
            return false
        }
    }

    if (!['js', 'jsx', 'ts', 'tsx'].includes(fileExtension)) {
        console.log(chalk.red(`❌ Invalid extension: ${fileExtension}`));
        console.log(chalk.gray('Valid extensions: js, jsx, ts, tsx'));
        return false;
    }

    return { paths, fileExtension }
}
