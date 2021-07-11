let userInput : unknown;
let userName : string;

userInput = 5;
userInput = "Kit";

// unknown different with any, error below
// userName = userInput 

// Type unknown : Must be check the type before assign value from unknown type 
// So unknown better than any if not decide type 
if(typeof userInput === "string" ){
    userName = userInput
} 