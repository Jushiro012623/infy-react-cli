import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Blueprint{

    static generate(type, name, extension){
        
        const rootDir = process.cwd();
        const templatesDir = path.join(__dirname, '../templates');

        switch (type){
            case 'component':
                return  {
                    src: path.join(templatesDir, `component/Component.jsx`),
                    dest: path.join(rootDir, 'src/components', `${name}.${extension}`)
                }
            case 'hook':
                return {
                    src: path.join(templatesDir, `hook/useHook.js`),
                    dest: path.join(rootDir, 'src/hooks', `${name}.${extension}`)
                }
            case 'page':
                return {
                    src: path.join(templatesDir, `page/Page.jsx`),
                    dest: path.join(rootDir, 'src/pages', `${name}.${extension}`)
                }
            case 'provider':
                return {
                    src: path.join(templatesDir, `provider/Provider.jsx`),
                    dest: path.join(rootDir, 'src/provider', `${name}.${extension}`)
                }
            default:
                console.log(chalk.red(`❌ Unable to generate type: ${type}`));
                return false;
        }
    }
}