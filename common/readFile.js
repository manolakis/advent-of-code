import fs from 'fs/promises';

export const readFile = async file => fs.readFile(file, { encoding: 'utf-8'});