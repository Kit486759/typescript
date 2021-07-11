// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Enum can skip the setup above, assign readabel label
enum Role {ADMIN = "Admin", READ_ONLY = 5, AUTHOR = 10};


const person = {
    name: "Kit",
    age: 30,
    hobbies: ["movie", "drawing"],
    role: Role.AUTHOR
}

console.log(person.role)

// string array 
let favourite: string[]
favourite = ["football"]

for (const item of person.hobbies) {
    console.log(item)
}