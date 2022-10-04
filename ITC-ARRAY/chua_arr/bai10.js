var arrNumber = ["111", "222", "333", "444"];
function removeElement(arr){
    arr.forEach((item, index) =>{
        if(arr[index] == "222"){
            arr.splice(index,1)
        }
    })
    return arr;
}
function replaceElement(arr){
    arr.forEach((item, index) =>{
        if(arr[index] === "444"){
            arr.splice(index,1, "555")
        }
    })
    return arr;
}
function convertNumber(arr){
    let arrConvert = [];
    arr.forEach((item, index) =>{
        // method 1:
        // let cvString = +arr[index];
        // method 2:
        // let cvString = arr[index]*1;
        // method 3:
        // let cvString = parseInt(arr[index]);
        // method 4:
        let cvString = Number(arr[index]);
        arrConvert.push(cvString)
    })
    return arrConvert;
}
console.log("1. Array after remove: ");
console.log(removeElement(arrNumber));
console.log("2. Array after replace: ");
console.log(replaceElement(arrNumber));
console.log("3. Array after convert: ");
console.log(convertNumber(arrNumber));


