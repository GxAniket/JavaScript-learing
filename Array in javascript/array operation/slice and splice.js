//slice() : retuen a piece of the array  =  no chnage in orignal arrays
//splice() : chnage original array ( add , remove , replace) = it is using for adding element  or deleted element form array

// let marvelheroes =["thor" , "spiderman","ironman"];

// console.log(marvelheroes);

// console.log();

// console.log(marvelheroes.slice(1 ,3));

//console.log(marvelheroes.slice(1));  its retuen element staring from one index to end 


//splice method : (stardx , delCount, newEl1...)

let marvelheroes =["thor" , "spiderman","ironman"];

console.log(marvelheroes.splice(0,1,"aniket"));

console.log(marvelheroes);