import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { readConfig, rootDir } from '../utils/file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Blueprint {

    static async generate(type, name) {

        const templatesDir = path.join(__dirname, '../templates');

        const config = await readConfig()

        if (!config) {
            return
        }
        
        const { paths, fileExtension } = config

        switch (type) {
            case 'component':
                console.log(fileExtension)
                return {
                    src: path.join(templatesDir, `component/Component.jsx`),
                    dest: path.join(rootDir, paths.component, `${name}.${fileExtension}`)
                };

            case 'hook':
                return {
                    src: path.join(templatesDir, `hook/useHook.js`),
                    dest: path.join(rootDir, paths.hook, `${name}.${fileExtension}`)
                };

            case 'page':
                return {
                    src: path.join(templatesDir, `page/Page.jsx`),
                    dest: path.join(rootDir, paths.page, `${name}.${fileExtension}`)
                };

            case 'provider':
                return {
                    src: path.join(templatesDir, `provider/Provider.jsx`),
                    dest: path.join(rootDir, paths.provider, `${name}.${fileExtension}`)
                };

            default:
                console.log(chalk.red(`❌ Unable to generate type: ${type}`));
                return false;
        }
    }
}