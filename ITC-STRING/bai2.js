var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator-2");

var myStr = "";

btnAdd.addEventListener('click', function() {
    myStr = input.value.toString();
    console.log(`My String = "${myStr}"`)
})

btnCalculator.addEventListener('click', function() {
    console.log(checkUpper(myStr));
})
// 2. Check độ dài => In hoa chữ đầu, cuối
function checkUpper(str){
    let firstUpper =  myStr.charAt(0).toUpperCase() + myStr.slice(1);
    let lastUpper = myStr.slice(0, -1) + myStr.slice(-1).toUpperCase();
    if(str.length > 10)
    {
        console.log(`2.MyStr after check = "${firstUpper}"`);
    }else{
        console.log(`2.MyStr after check = "${lastUpper}"`);
    }
}