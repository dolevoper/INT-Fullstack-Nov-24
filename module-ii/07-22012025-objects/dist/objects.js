var person1 = {
    // key: value,
    firstName: "Omer",
    lastName: "Dolev",
    age: 34
};
alert(person1.department);
alert(person1.firstName + " " + person1.lastName + ", " + person1.age);
var newName = prompt("Please enter your name");
var nameParts = newName !== null ? newName.split(" ") : [person1.firstName, person1.lastName];
// const nameParts = newName?.split(" ") ?? [person1.firstName, person1.lastName];
// ?. - conditional chaining ("elvis")
// exp1?.exp2 === ((exp1 === null || exp1 === undefined) ? undefined : exp1.exp2)
// ?? - nullish coalescing (binary)
// (exp1 ?? exp2) === (exp1 == null ? exp2 : exp1)
person1.firstName = nameParts[0];
person1.lastName = nameParts[1];
person1.department = "R&D";
alert(person1["firstName"] + " " + person1["lastName"]);
alert(person1.department);
