//Project Euler - Problem 5

//smallest number which is evenly divisble by all numbers 1 - 20?
//11, 13, 14, 16, 17

//start from the biggest: check for 20.  That takes care of 20, 2, 10, 4, 5, 1.
//then 19
//then 18: that's 18, 9, 6, 3
//then 17, 16 (takes care of 8), don't need 15 as 5 and 3 taken care of above, 
//then 14 (takes care of 7)
//then 13
//for 12: already know 3 and 4 must be allowed by this point
//then 11

//check in multiples of 20

var i = 20;
mod = 1;

while (mod>0) {
	
    mod = Math.max(i%19, i%18, i%17, i%16, i%14, i%13, i%11);
    if (mod>0) {
    	i = i + 20;
    }
}

document.write(i);
