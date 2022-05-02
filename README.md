## Explanation

For the algorithm to work, the ranges must be ordered by the lower index.


range1 = (a1 , b1) & range2 = (a2, b2) where a1 < a2


bool overlap = b1 > a2;

range1---------|---|<br />
range2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> false (ranges must be sorted)

range1-------|---|<br />
range2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> false (ranges must be sorted)

range1------|---|<br />
range2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> true (ranges must be sorted)

range1---|---|<br />
range2---|--|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> true

range1----|---|<br />
range2---|-----|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> true (ranges must be sorted)

range1---|---|<br />
range2----|-|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> true

range1---|---|<br />
range2----|--|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> true

range1---|---|<br />
range2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> true

range1---|---|<br />
range2----|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> true

range1---|---|<br />
range2-------|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> false

range1---|---|<br />
range2--------|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> false


## Trace

1.- Sort the tuples by the lower index in increasing order<br />
2.- Create an auxiliary array to save overlapping tuples<br />
3.- Compare input tuples at position n with (n-1)<br />
3.- If the tuples overlap, I keep the tuple resulting from merging both, that is, I modify the upper index with the maximum value of both tuples<br />
4.- If the tuples don't overlap, I keep the next tuple as it is<br />

range1------|---|<br />
range2---------|---|<br />
range3-----------|---|<br />
range4------------------|---|<br />
range5--------------------|---|<br />
range6---------------------------|---|<br />

result&nbsp;&nbsp;&nbsp;------|--------|--|-----|--|---|<br />

Ranges 1,2 y 3 are merged, same as ranges 4 y 5.

If we assume that we sort the tuples with QuickSort O(n log n) or BubbleSort O(n), the function that groups the overlapping tuples in general is of linear complexity O(n).

## Install dependencies
```yarn```

## Build
```yarn build```

## Run
```yarn start```

## Test
```yarn test```

## Coverage
```yarn test:cov```
