// Literal type 
function combine(
    input1: number | string,
    input2: number | string,

    // Set reault state
    resultConversion : "asNumber" | "asText"
    ){
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "asNumber") {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineAge = combine(10, 15, "asNumber")
console.log(combineAge)

const combineString = combine("10", "15", "asNumber")
console.log(combineString)

const combineName = combine("Kit", "So" ,"asText")
console.log(combineName)