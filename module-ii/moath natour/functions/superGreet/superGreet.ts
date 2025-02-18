const firstName : string | null = prompt("what is your first name?");
const lastName : string | null = prompt("what is your last name?");

function capitalizeFirstLetter(name : string | null){

if(name === null){

    name = "";
}

else {name = name.slice(0,1).toUpperCase() + name.slice(1);

}

return name;
}

alert("Hello " + capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName) + "!");
