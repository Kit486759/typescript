// Assign type to function Fn:"TYPE"
function add (n1: number , n2: number): number{
    return n1 + n2;  
}

// Void result as case that not return anythings
function printResult (num:number): void{
    console.log(`result is ${num}`) 
}
printResult(add(10,15))

// Set as Function type
// let combineValue: Function;

// Set as Function type (what parameter to take and return)
let combineValue: (a:number, b:number)=>number;

combineValue = add
// combineValue = printResult

console.log(combineValue(10,15))


// Set function type also callback function type
function addHandle(n1: number, n2: number, callBack:(num:number)=>void){
    const result = n1 + n2;
    callBack(result)
}

// Run function with callback function type
addHandle(10,31,(total)=>{
    console.log(total)    
})