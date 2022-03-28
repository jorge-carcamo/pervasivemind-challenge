import { meFunction } from './main';
import { Tuple } from './tuple';

const tuples: Tuple[] = [
  {
    start: 1,
    len: 4,
    cb: 'payload1',
  },
  {
    start: 2,
    len: 5,
    cb: 'payload2',
  },
  {
    start: 25,
    len: 2,
    cb: 'payload3',
  },
  {
    start: 26,
    len: 2,
    cb: 'payload4',
  },
  {
    start: 15,
    len: 5,
    cb: 'payload5',
  },
  {
    start: 16,
    len: 10,
    cb: 'payload6',
  },
  {
    start: 22,
    len: 2,
    cb: 'payload7',
  },
  {
    start: 28,
    len: 4,
    cb: 'payload11',
  },
  {
    start: 7,
    len: 3,
    cb: 'payload8',
  },
  {
    start: 8,
    len: 3,
    cb: 'payload9',
  },
  {
    start: 23,
    len: 3,
    cb: 'payload10',
  },
];

const result = meFunction(tuples);
console.log(result);
let output = '';

for (let i = 0; i < result.length; i++) {
  output = `${output} industrialProtocol.read(${result[i].start}, ${result[i].len})  \t-> `;

  for (let j = 0; j < result[i].cb.length; j++) {
    output = `${output} cb${j + 1}(${result[i].cb[j]})   & `;
  }
  output = `${output.substr(0, output.length - 4)}\n`;
}
console.log(output);
