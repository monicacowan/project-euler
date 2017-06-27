//Project Euler - problem 6:
//Find the difference between the sum of the squares of 
//the first one hundred natural numbers and the square of the sum

var i = 1;

//two different sums: sum of squares and sum

var sumOfSquares = 0;
var sum = 0;

//loop through all numbers from 1 to 100

for (i = 1; i < 101; i++) {
	sum = sum + i;
    sumOfSquares = sumOfSquares + i*i;
}

var ans = - sumOfSquares + sum*sum;

document.write("sum2 = " + sum*sum + " ");
document.write("sumOfSquares = " + sumOfSquares+ " ");
document.write("ans = " + ans+ " ");
