/* var factorial =1;
for(let i = 1; i<=4; i++){
    factorial = factorial*i;
}
console.log(factorial);
*/


// for loop

function getFactorial(number){
    let factorial =1;
    for( let i = 1; i<=number; i++){
        factorial =factorial * i;
    }
    return factorial;
}
let firstFact = getFactorial(8);
console.log('Factorial of 8 is :', firstFact);


// while loop 

function getFactorial(number){
    let factorial =1;
    let i =1;
    while(i<=number){
        factorial = factorial * i;
        i++;
    }
    return factorial;

}
let firstFactorial = getFactorial(5);
console.log(firstFactorial);

// while loop decriment 
function getFactorial(number){
    let factorial =1;
    let i = number;
    while(i>=1){
        factorial = factorial * i;
        i--;
    }
    return factorial ;
}
let myFactorial = getFactorial(6);
console.log(myFactorial);
