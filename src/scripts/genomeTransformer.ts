import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { exit } from 'process';

type EntryTuple = [string, string, string, string, string];

let count = 0;

export interface CytoBandData {
  id: number;
  chromosome: string;
  start: number;
  end: number;
  name?: string;
  giemsaStains: string;
}

function serialize([
  chromosome,
  start,
  end,
  name,
  giemsaStains,
]: EntryTuple): CytoBandData {
  return {
    id: count++,
    chromosome,
    start: parseInt(start),
    end: parseInt(end),
    name: name === '' ? undefined : chromosome.substring(3) + '.' + name,
    giemsaStains,
  };
}

(async () => {
  console.log(process.argv);
  if (!process.argv[2]) {
    console.error('Usage transformer.js <file>');
    exit(1);
  }

  const filePath = path.join(__dirname, './cytoBand.txt');
  const fileName = path.parse(filePath).name;

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const res: CytoBandData[] = [];
  for await (const line of rl) {
    const row = line.split('\t') as EntryTuple;
    res.push(serialize(row));
  }

  const data = JSON.stringify(res, null, 2);
  fs.writeFileSync(path.join(__dirname, `${fileName}.json`), data);
})();
