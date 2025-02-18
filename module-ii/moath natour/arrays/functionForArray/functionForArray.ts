function smallestTwo (array: number[]){

    let min = Infinity;
    let secondMin = Infinity;
   

for(let i = 0; i < array.length; i++){

    if(array[i]<min){


min= array[i]

    }

}


for(let i = 0; i < array.length; i++){

if(array[i] > min && array[i] < secondMin){
   
secondMin = array[i];
}
}


return [min , secondMin];

}


const test : number[] = [];


for(let i = 0; i <  7; i++){

test[i] = Number(prompt("please insert a number"));



}

alert(smallestTwo(test));