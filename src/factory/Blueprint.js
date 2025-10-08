import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Blueprint {

    static async generate(type, name, extension) {

        const rootDir = process.cwd();
        const templatesDir = path.join(__dirname, '../templates');
        const configPath = path.join(rootDir, '.infyrc.json');

        let paths = {
            component: 'src/components',
            hook: 'src/hooks',
            page: 'src/pages',
            provider: 'src/provider'
        };

        if (await fs.pathExists(configPath)) {
            try {
                const config = await fs.readJson(configPath);

                if (config.paths) {
                    paths = { ...paths, ...config.paths }; // merge overrides
                }
            } catch (err) {
                console.log(chalk.yellow(`⚠️ Invalid .infyrc.json format — using default paths.`));
            }
        }
        switch (type) {
            case 'component':
                return {
                    src: path.join(templatesDir, `component/Component.jsx`),
                    dest: path.join(rootDir, paths.component, `${name}.${extension}`)
                };

            case 'hook':
                return {
                    src: path.join(templatesDir, `hook/useHook.js`),
                    dest: path.join(rootDir, paths.hook, `${name}.${extension}`)
                };

            case 'page':
                return {
                    src: path.join(templatesDir, `page/Page.jsx`),
                    dest: path.join(rootDir, paths.page, `${name}.${extension}`)
                };

            case 'provider':
                return {
                    src: path.join(templatesDir, `provider/Provider.jsx`),
                    dest: path.join(rootDir, paths.provider, `${name}.${extension}`)
                };

            default:
                console.log(chalk.red(`❌ Unable to generate type: ${type}`));
                return false;
        }
    }
}