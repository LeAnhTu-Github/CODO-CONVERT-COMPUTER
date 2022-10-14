var ipName = document.querySelector(".input-name")
var ipAge = document.querySelector(".input-age")
var ipAddress = document.querySelector(".input-address")
var ipClass = document.querySelector(".input-class")
var btnInput2 = document.querySelector("#btn-add-2")
var myArr = [];
var myObj = {};
btnInput2.addEventListener('click', function() {
    myObj.fullName = ipName.value;
    ipName.value = ""
    myObj.age = ipAge.value*1;
    ipAge.value = ""
    myObj.address = ipAddress.value;
    ipAddress.value = ""
    myObj.class = ipClass.value
    ipClass.value = ""
    myArr.push(myObj)
    console.log(myArr)
})
