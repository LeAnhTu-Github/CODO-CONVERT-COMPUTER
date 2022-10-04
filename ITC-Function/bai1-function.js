
// 1.Xây dựng hàm sum
var sum = (a,b) => a+b;
console.log(`1.Tong 2 so a va b la ${sum(2,4)}`);

// 2.Hàm kiểm tra các số nguyên tố trong mảng
var check = (n) => {
    var snt = true;
    if(n<2){
        snt = false;
    }else{
        for(var i = 2; i<n-1; i++){
            if(n % i == 0){
                snt = false;
                break;
            }
        }
    }
    if(snt == true){
        console.log(`2. ${n} la so nguyen to`);
    }else{
        console.log(`2. ${n} khong phai la so nguyen to`);
    }
}
console.log(check(3));


// 3.Hàm tính giá trị biểu thức expres = 1/n + 2/n + 3/n + ... + n/n
var Expres = (n) => {
    var sum = 0;
    for(var i = 1; i<=n; i++){
        sum += i/n;
    }
    return sum;
}
console.log(`3.Tong cac gia tri 1/n + ... + n/n là: ${Expres(5)}`);

// 4.Hàm tính tổng các phẩn tử lẻ trong mảng
var a = [1,2,3,4,5,6,7,8,9];
var lenght = a.length;
var SumLe = (arr) => {
    var sum=0;
    for(var i = 0; i< lenght; i++){
        if(arr[i] % 2 != 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(`4.Tong cac so le trong mang a la: ${SumLe(a)}`);

// 5.Hàm nhận 1 dãy ko xác định, trả ề tổng các tham số nhận vào
var SumInfi = (...number ) =>{
    var sum  = 0;
    for(var i=0; i<number.length ; i++){
        sum += number[i];
    }
    return sum;
}
// Sử dụng argument có sẵn trong function
console.log(`5. Tong khong gioi han la: ${SumInfi(1,2,3,4,5,6,7)}`);

// 6. cho a=1. cứ 1s tăng 1 đơn vị
    console.log('Day so a tang dan: ');
    var a = 1;
    var RunCode = setInterval(() => {
        a++;
        console.log(`a = ${a}`);
        if(a == 10){
            clearInterval(RunCode);
            console.log('Dung chuong trinh');
        }
    }, 300);

// 7. Ket qua của hàm trả về 7
// 8.Hàm làm tròn số và hàm tính diện tích hình tròn
// var Lamtron = (a) => {

// }

var Stron = (r) => {
    var S = 0;
    S = 3.14 * (r*r);
    return S;
}
console.log(`8.Dien tich hinh tron la: ${Stron(4)}`);

// 9. Trả về [1, 2, 3, 9, 8] = sum = 23
const flatSum = function(arr, total = 0){
    if(arr[0] != undefined){
        let item = arr[0];
        arr.shift();
        return flatSum(arr, total+item);
    }
    return total;
};

