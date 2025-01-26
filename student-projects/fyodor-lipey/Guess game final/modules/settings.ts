export const difficulty = function(mode: string){
if (mode === "easy"){
return 5; 
} else if (mode === "medium") {
return 3; 
} else if (mode === "hard") {
return 1;
} else {
return "please choose easy/medium/hard";
location.reload; 
}
}


