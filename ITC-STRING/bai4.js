var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator-4");

var myStr = "";

btnAdd.addEventListener('click', function() {
    myStr = input.value.toString();
    console.log(`My String = "${myStr}"`)
})

btnCalculator.addEventListener('click', function() {
    console.log(`4. String after replace = "${countLetter(myStr)}"`);
})
// 4. Replace letter JS => Javascript
var countLetter = (str) =>{
    let newStr = str.replace(/JS/g, 'Javascript');
    return newStr;
}
