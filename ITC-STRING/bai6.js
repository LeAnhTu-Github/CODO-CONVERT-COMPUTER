var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator-6");

var myStr = "";

btnAdd.addEventListener('click', function() {
    myStr = input.value.toString();
    console.log(`My String = "${myStr}"`)
})

btnCalculator.addEventListener('click', function() {
    console.log(`My Array after convert: `)
    console.log(converLetter(myStr))
})
// 6.Convert element from String to Array
var converLetter = (str) =>{
    let tempStr = str.split(' ');
    return tempStr;
}