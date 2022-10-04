var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator-3");

var myStr = "";

btnAdd.addEventListener('click', function() {
    myStr = input.value.toString();
    console.log(`My String = "${myStr}"`)
})

btnCalculator.addEventListener('click', function() {
    if(countLetter(myStr) == 0){
        console.log(`3.Khong tim thay tu khoa js trong string`);
    }else{
        console.log(`3.So lan xuat hien tu khoa JS = ${countLetter(myStr)}`);
    }
})
// 3.Find Text "JS" => count
var countLetter = (str) =>{
    let tempStr = str.split(' ');
    let letter = [];
    let count = 0;
    tempStr.forEach((item, index) =>{
        if(tempStr[index] === "JS"){
            letter.push(tempStr[index]);
            count++;
        }
    });
    return count;
}