//sum the even fibonacci numbers up to 4 million

var i = 1;
var sum = 0;
var fibonacci = 1;
var fibonacciPrev = 1;
var fibonacciNext = 0;

while (fibonacci<4000001) {
	fibonacciNext = fibonacci + fibonacciPrev;
    
    //check to see if fibonacci is even
    
    if (fibonacci%2 == 0) {
    	sum = sum + fibonacci;
    }
    
    fibonacciPrev = fibonacci;
    fibonacci = fibonacciNext;
    
}

document.write(sum);
