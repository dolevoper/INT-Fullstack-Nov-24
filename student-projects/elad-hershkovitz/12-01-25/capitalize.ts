const firtstname = prompt("enter your name") as string;

function capitalize(name: string){
    alert(name.slice(0, 1).toUpperCase() + name.slice(1));
}

capitalize(firtstname);