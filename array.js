function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 var newArray=[element,...array];
return (newArray);

}


function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
array.unshift(element);
return array;

}

function addElementToEndOfArray(array, element) {
return (...array,element);
//do return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push (element);
return array;
}

function accessElementInArray(array, index) {
aarray [index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

array.shift(element)
return array
//array.shift(elment)
//return array
}

function removeElementFromBeginningOfArray(array) {
}
return array.slice(1)

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element)
  return array

}

function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1)
}
// CHALLENGE: remove an element from the middle of the array/at a given index 
// and return a COPY of the original array, minus that element

function nonDestructivelyRemoveAtIndex(array, index) {
return array.slice(1)
// using slice _and_ spread??
}


function ifGreater(n){
if ( n=>10){
    console.log(n + " is greater than 10")}
    else {
      console.log ("Wrong no!")
    }
}