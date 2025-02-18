let array :number[] = []

for(let i = 0; i < 10; i++){

array[i] = Number(prompt("please enter a number"));


}


alert(array)



for(let l = 1; l < array.length ; l++){
    let maxNumber = -Infinity;
for(let i = 0; i < array.length - l; i++){

if(array[i]> maxNumber){

maxNumber = array[i];
if(array[array.length  - l] < maxNumber){


array[i] = array[array.length -l]
array[array.length -l] = maxNumber;

}

}

} 

}


alert(array);