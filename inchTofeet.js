function inchTofeet(inches){
    var feet = inches/12;
    return feet;
}


var myInches = 132;
var feet = inchTofeet(myInches);
console.log('My inches in feet', feet);

var dadiInches =144;
var feet = inchTofeet(dadiInches);
console.log('Dadi inches in feet', feet);



// mile to km

function mileTokilometer(miles){
    var km = miles*1.609;
    return km;
}
var marathon = mileTokilometer(26.2);
console.log('marathon in km:',marathon);
