// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     roles: [number,string];
// } 

// const ADMIN = 0;
// const READ_OMLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}
const person = {
    name: 'mourya',
    age: 25,
    hobbies: ['sports', 'cooking'],
    //roles: [2,'author']
    role: Role.ADMIN
};

// const person: {name: string, age: number}= {
//     name: 'mourya',
//     age: 25
// };
// person.roles.push('admin');
// person.roles[1]=10;
// person.roles= [0,'aut','add'];

console.log(person.age);
console.log(person.hobbies[0]);
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
};

if (person.role === Role.ADMIN){
    console.log("is admin");
    console.log(typeof Role.ADMIN)
}