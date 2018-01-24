function addition(value) {
    console.log("Value is: " + value);
}
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
//addition(myAdd);
