// Set a Object Constructor
function Xe(a, b, c){
    this.tenXe = a,
    this.hangXe = b,
    this.namSanXuat = c 
}
// 1.set 2 object Xe
var Xedap = new Xe("Cao Cao", "Viet Nhat", 2015)
var Xehoi = new Xe("Roll-Royce Phantom", "Roll-royce", 2022)

// 2.Add 
Xedap.soBanh = 2
Xehoi.soGhe = 6

// 3. Add Object prototype is funtion ....
var date = new Date();
var nowYear = date.getFullYear();
console.log(Xedap)
Xe.prototype.tinhTuoi = (a,b) => a-b;
console.log(Xedap.tinhTuoi(nowYear, Xedap.namSanXuat))