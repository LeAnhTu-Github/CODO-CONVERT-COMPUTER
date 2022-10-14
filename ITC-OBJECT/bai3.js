// 1. print day-month-year now use Date()
var date = new Date()
var ngay = date.getDate()
var thang = date.getMonth() + 1
var nam = date.getFullYear()
document.getElementById("demo").innerHTML = date;
// 3. Lam tron so
var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator");
var btnRandom = document.querySelector(".random")
var myNumber = 0;

btnAdd.addEventListener('click', function() {
    myNumber = input.value;
    console.log(`My Number Input = "${myNumber}"`)
})

btnCalculator.addEventListener('click', function() {
    console.log(`Number after convert = ${convert(myNumber)}`)
})

btnRandom.addEventListener('click', function() {
    alert(testRandom(gift))
})
var convert = (a) =>{
    return Math.round(a);
}

var gift = [
    'Bạn đen lắm',
    '10 coin',
    '20 coin',
    '30 coin',
    'Giải khuyến khích',
    'Giải nhì',
    'Giải nhất',
    'Giải đặc biệt (^.^)'
];
var testRandom = (arr) =>{
    var random = Math.floor(Math.random() *arr.length);
    return gift[random]
}