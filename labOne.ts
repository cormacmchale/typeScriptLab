function addition(value: string) {
    console.log("Value is: " + value);
    }
   
function add(x: number, y: number): number {
        return x + y;
}
    
let myAdd = function(x: number, y: number): number { return x + y; };


    let firstVal: number = 42;
    let secondVal: number = 1;
    let sumOfVals: string = (firstVal + secondVal).toLocaleString();
    addition(sumOfVals);
  console.log(myAdd(5,6));
    