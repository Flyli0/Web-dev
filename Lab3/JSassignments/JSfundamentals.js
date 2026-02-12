let admin;
let name;
name = "John";
admin = name;
console.log(admin);

let something = ("What is your name?");
console.log(something);


let map = {
    item1: "Bear",
    item2: "Bar",
    item3: "Chart"
}

for(let key in map){
    console.log(map[key]);
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(salaries){
    let sum = 0;
    for(let i in salaries){
        sum += salaries[i];
    }
    console.log(sum);
}

sum(salaries);