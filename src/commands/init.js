import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';

export default async function createConfig() {
  const configPath = path.join(process.cwd(), '.infyrc.json');
  const defaultConfig = {
    paths: {
      component: 'src/components',
      hook: 'src/hooks',
      page: 'src/pages'
    },
    extension: 'jsx'
  };

  try {
    await fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 2));
    console.log(chalk.green(`✅ Created .infyrc.json at ${configPath}`));
  } catch (error) {
    console.error(chalk.red(`❌ Error creating config: ${error.message}`));
  }
}
