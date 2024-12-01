import fs from 'fs/promises';

export const readFile = async file => {
  const data = await fs.readFile(file, { encoding: 'utf-8'});

  return data.split(/\r?\n/);
}

