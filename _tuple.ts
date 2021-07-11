const person: {
    name: string;
    age: number;
    hobbies: string[]


    // Tuple = fixed length array 
    // Exact type of element 
    role: [number, string]
} = {
    name: "Kit",
    age: 30,
    hobbies: ["movie", "drawing"],
    role: [2, "author"]
}

// Push is exceptional 
person.role.push('admin')

// person.role[1] = 10

console.log(person)
// string array 
let favourite: string[]
favourite = ["football"]

for (const item of person.hobbies) {
    console.log(item)
}