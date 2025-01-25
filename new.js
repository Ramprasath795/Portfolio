const user={
    name:"Hendrick",
    age:"35",
    "is Single":"true",
    
}
console.log(user.name);
let a=25;
let b=a;
console.log(a)
b=30;
console.log(a);
console.log(b);
let user2=user.age;
user2=32;
console.log(user2);
const user={
    name:"Hendrick",
    age:"35",
    "is Single":"true",
}

for(let key in user){
    console.log(key+":"+user[key]);
}
let array=[1,2,3,4,5,6,7,8]
