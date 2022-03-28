import { Tuple, TupleResult } from './tuple';

export const meFunction = (inputList: Tuple[]): TupleResult[] => {
  if (!inputList || inputList.length === 0) {
    return [];
  }

  const result: TupleResult[] = [];
  const sortedInputList = inputList.sort((a, b) =>
    a.start < b.start ? -1 : 1,
  );

  result.push({
    start: sortedInputList[0].start,
    len: sortedInputList[0].len,
    cb: [],
  });

  for (let k = 0; k < sortedInputList.length; k++) {
    const start1 = sortedInputList[k].start;
    const end1 = start1 + sortedInputList[k].len - 1;
    //const start2 = result[result.length - 1].start;
    const end2 = result[result.length - 1].len;

    if (end2 >= start1) {
      result[result.length - 1].len = Math.max(end1, end2);
      result[result.length - 1].cb.push(sortedInputList[k].cb);
    } else {
      result.push({ start: start1, len: end1, cb: [sortedInputList[k].cb] });
    }
  }
  
  return result;
};
