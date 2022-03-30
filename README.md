## Explicación

El problema tiene similitud con el algoritmo que se utiliza generalmente para saber si dos ragos (comunmente fechas en los datepicker) se solapan. Para que funcione el algoritmo los rangos deben estar ordenados por el indice inferior.


rango1 = (a1 , b1) & rango2 = (a2, b2) donde a1 < a2


bool overlap = b1 > a2;

rango1---------|---|<br />
rango2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> falso (implica ordenar los rangos)

rango1-------|---|<br />
rango2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> falso (implica ordenar los rangos)

rango1------|---|<br />
rango2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> verdadero (implica ordenar los rangos)

rango1---|---|<br />
rango2---|--|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> verdadero

rango1----|---|<br />
rango2---|-----|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> verdadero (implica ordenar los rangos)

rango1---|---|<br />
rango2----|-|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> verdadero

rango1---|---|<br />
rango2----|--|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> verdadero

rango1---|---|<br />
rango2---|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> verdadero

rango1---|---|<br />
rango2----|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> verdadero

rango1---|---|<br />
rango2-------|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> falso

rango1---|---|<br />
rango2--------|---|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> falso


Esta idea la apliqué al problema:

1.- Ordenar las tuplas por el indice inferior de forma creciente<br />
2.- Crear un arreglo auxiliar para guardar las tuplas que se solapen<br />
3.- Comparar las tuplas de entrada de la posición n con la (n-1)<br />
3.- Si se solapan las tuplas, guardo la tupla resultante de mezclar ambas, es decir, modifico el indice superior con el valor máximo de ambas tuplas<br />
4.- Si no se solapan las tuplas, guardo la siguiente tupla tal como está<br />

rango1------|---|<br />
rango2---------|---|<br />
rango3-----------|---|<br />
rango4------------------|---|<br />
rango5--------------------|---|<br />
rango6---------------------------|---|<br />

result&nbsp;&nbsp;&nbsp;------|--------|--|-----|--|---|<br />

Rango 1,2 y 3 se mezclan, al igual que rango 4 y 5.

Si asumimos que ordenamos las tuplas con QuickSort O(n log n) o BubbleSort O(n), la funcion que agrupas las tuplas solapadas en general queda de complejidad lineal O(n).

## Instalar dependencias
```yarn```

## Construir
```yarn build```

## Run
```yarn start```

## Test
```yarn test```

## Cobertura
```yarn test:cov```
