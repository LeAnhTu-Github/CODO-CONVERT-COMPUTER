var nhanvien = {
    fullName: "Anh Tu",
    yearOfBirth: 2003,
    address: "Moc Chau",
    wage: 1200
};

// 1. Add couple key-value on Object
nhanvien.yearExperience = "2 nam"
nhanvien.email = "abc@gmail.com"

// 2. Add variable on Object
var nameKey = "gender"
nhanvien[nameKey] = "Nam"

// 3. Remove key email out Object
delete nhanvien.email

// 4. Set key calculateAge 
var date = new Date();
var nowYear = date.getFullYear();
nhanvien.calculateAge = (a,b) => a-b;
// Check age
var ageNv = nhanvien.calculateAge(nowYear, nhanvien.yearOfBirth)
console.log(`4. Tuoi cua nhan vien hien tai la: ${ageNv}`)
if(ageNv > 20)
    console.log(`5. Nhan vien du tuoi`)
console.log(`5. Nhan vien chua du tuoi`)

