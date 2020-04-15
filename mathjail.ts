import { createWriteStream } from 'fs';
const logFile = createWriteStream('./mathjail.txt');
const debug = (process.argv[2] === 'debug');
const log = (v: Array<boolean>, debugLog?: boolean): void => {
  if(debugLog === true && debug === false) return;
  let o: Array<boolean | number> = v; // output so we don't modify original
  o = o.map((d) => (d ? 1 : 0))
  logFile.write(`${o.join('')}\n`);
}
const logSplit = (data?: string, debugLog?: boolean) => {
  if(debugLog === true && debug === false) return;
  logFile.write(`-----===${((data !== undefined) ? `+ ${data} +` : '+')}===-----\n`);
}

logSplit('Initializing array with 100 false values', true);
const cells: Array<boolean> = new Array(100).fill(false);
logSplit('Begin Initial array valus', true);
log(cells);
logSplit('End Initial array values', true);

const guardRun = (guardNumber: number): void => {
  cells.forEach((v, i) => {
    if((i % guardNumber) === 0) cells[i] = !v
  });
}

logSplit('Begin');

for(let i = 1; i < 101; i++) {
  logSplit(`Now executing staff number ${i}`, true);
  guardRun(i);
  log(cells);
}

logSplit('End');

logSplit('Begin Final array values', true);
log(cells, true);
logSplit('End Final array values', true);
