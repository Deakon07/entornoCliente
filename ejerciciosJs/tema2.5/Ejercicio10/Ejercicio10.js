var user = {};

user.name = "John";
console.log(user.name);
user.surname = "Smith";
console.log(user.surname);
user.name = "Peter";
console.log(user.name);
delete user.name;
console.log(user);
