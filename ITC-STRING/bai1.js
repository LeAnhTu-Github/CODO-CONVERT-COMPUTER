var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator-1");

var myStr = "";

btnAdd.addEventListener('click', function() {
    myStr = input.value.toString();
    console.log(`My String = "${myStr}"`)
})

btnCalculator.addEventListener('click', function() {
    console.log(standStr(myStr));
})
// 1. Chuẩn hóa chuỗi 
function standStr(str){
    let newStr = str.trim();
    console.log(`1.MyStr after stand = "${newStr}"`)
};



