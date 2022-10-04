var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator-5");

var myStr = "";

btnAdd.addEventListener('click', function() {
    myStr = input.value.toString();
    console.log(`My String = "${myStr}"`)
})

btnCalculator.addEventListener('click', function() {
    console.log(`5. String after delete = "${removeLetter(myStr)}"`);
})
// 5. Remove all letter Javascript out String
var removeLetter = (str) =>{
    let tempStr = str.split(' ');
    let letter = [];
    tempStr.forEach((item, index) =>{
        if(tempStr[index] === "Javascript"){
            tempStr.splice(index,1)
        }
    });
    return tempStr.join(" ");
}
