function isLeapYear(year){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2100;
const result = isLeapYear(myYear);
console.log( 'Is my year leap year :', result);