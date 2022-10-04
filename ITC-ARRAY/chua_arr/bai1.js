var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator");


var array = [];
// định dạng dữ liệu
function convert(a) {
    a = parseInt(a)
    return a
}
function findMax(arr) {
    if(arr.length == 0){
        alert("Mảng không có giá trị, vui lòng nhập vào")
    }else{
        let max = arr[0]
        for(let index = 1; index < arr.length; index ++){
            if(arr[index] >  max)
                max  = arr[index]
        }
        alert("Số lớn nhất là: " + max)
    }
}

function findMin(arr) {
    if(arr.length == 0){
        alert("Mảng không có giá trị, vui lòng nhập vào")
    }else{
        let min = arr[0]
        for(let index = 1; index < arr.length; index ++){
            if(arr[index] <  min)
                min  = arr[index]
        }
        alert("Số nhỏ nhất là: " + min)
    }
}

btnAdd.addEventListener('click', function() {
    let number = convert(input.value)
    array.push(number)
    input.value = ""
})

btnCalculator.addEventListener('click', function() {
    findMax(array)
    findMin(array)
})
