const fullName : string | null = prompt("what is your full name?");

let twoNames : boolean = false;


function isItTwoNames (fullName : string) : boolean {

for(let i = 0; i < fullName.length; i++){

    if(fullName[i] === " "){

        twoNames = true;
    }   
}

return twoNames;

}

function firstAndLastLetter (fullName : string | null ) {

    let firstIndex : number = 0;
let secondIndex : number = 0;


    if(fullName === null){

        fullName = "";
    }

    else {

for(let i = 0; i < fullName.length ; i++){   

    if(fullName[i] === " " && fullName[i-1] !== " "){

         firstIndex = i ;
    }
     
                    if(fullName[i] === " " && fullName[i+1] !== " "){
                    
                secondIndex = i + 1;

                    }
}

    }

    return [firstIndex,  secondIndex] ;

}


function buildName (fullName : string){

const bothIndexes = firstAndLastLetter(fullName);



if(isItTwoNames(fullName)){

fullName = fullName.slice(0,1).toUpperCase()  + fullName.slice(1 , bothIndexes[0]) + " " + fullName.slice(bothIndexes[1], bothIndexes[1] + 1).toUpperCase() + fullName.slice(bothIndexes[1] + 1);

}

else{

    fullName = fullName.slice(0,1).toUpperCase() + fullName.slice(1);
}
return fullName;

}

alert("Hello " + buildName(fullName) + "!")
