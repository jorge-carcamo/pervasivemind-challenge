import { meFunction } from './main';

test('the data is peanut butter', () => {
  expect(1).toBe(1);
});

test('meFunction', () => {
  expect(
    meFunction([
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
    ]),
  ).toEqual([
    { start: 1, len: 6, cb: ['payload1', 'payload2'] },
    { start: 7, len: 10, cb: ['payload8', 'payload9'] },
    {
      start: 15,
      len: 27,
      cb: [
        'payload5',
        'payload6',
        'payload7',
        'payload10',
        'payload3',
        'payload4',
      ],
    },
    { start: 28, len: 31, cb: ['payload11'] },
  ]);
});

test('meFunction', () => {
  expect(meFunction([])).toEqual([]);
});
