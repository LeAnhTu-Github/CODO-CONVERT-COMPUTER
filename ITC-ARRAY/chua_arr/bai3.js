// arr loop
//     + for thường, for in, for of 
//     + forEach, reduce, map, find, filter, every, some
//     + while 
//     + do while 
//     + đệ qui 

var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator");

var array = [];
function convert(a) {
    a = parseInt(a)
    return a
}
btnAdd.addEventListener('click', function() {
    let number = convert(input.value)
    array.push(number)
    input.value = "" 
    console.log(array)
})

function Calcuavg(arr) {
    // let total = 0;
    // for(let i = 0; i < arr.length; i ++){
    //     total += arr[i]
    // }
    // return total / arr.length

    let totalArr = arr.reduce(function(total, item, index) {
        return total += item
    }, 0)
    return totalArr / arr.length

    // [4, 8, 18]
    // => (0 , 4, 0)  return total += item 4
    // => (4 , 8, 1)  return total += item 12
    // => (12, 18, 2) return total += item  30
    // => 30 
}

btnCalculator.addEventListener('click', function() {
    var avg = Calcuavg(array);
    console.log(avg)
})