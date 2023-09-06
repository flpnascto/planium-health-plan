import fs from 'fs/promises';
import path from 'path';

export type FileType = 'plans' | 'prices';

const PATHS = {
  plans: path.join(__dirname, 'database', 'plans.json'),
  prices: path.join(__dirname, 'database', 'prices.json'),
};

export class HandleFile {
  private PATHS = PATHS;

  public async readFile<T>(type: FileType): Promise<T> {
    const dataRaw = await fs.readFile(this.PATHS[`${type}`], { encoding: 'utf8' });
    const data: T = JSON.parse(dataRaw);
    return data;
  }
}
