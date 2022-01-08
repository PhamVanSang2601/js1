//bài 1:
//block 1: gọi giá trị lương 1 ngày và cho user nhập sô ngày làm.
//block 2: 
//
let x = 28;
let y = 100000;
console.log("số ngày làm:", x);
console.log("lương 1 ngày:", y);
console.log("Tổng lương:", x*y);

//bài 2:
let a = 52;
let b = 74;
let c = 157;
let d = 168;
let e = 261;
const sum= a+b+c+d+e;
console.log("giá trị trung bình của 5 số nguyên:", sum/5);

//bài tập 3
let u = 23000;
console.log("giá USD:", u,"VNĐ");
let i = 20;
console.log("số tiền USD:", i,"USD");
const multi=u*i;
console.log("số tiền quy đổi:", multi,"VNĐ");

//bài 4:
let xy = 5;
console.log("chiều rộng:", xy);
let yz = 14;
console.log("chiều dài:", yz);
console.log("diện tích:",xy*yz);
console.log("chu vi:", (xy+yz)*2);

//bài 5:
let ten;
let unit;
let n =89;
ten = Math.floor(n/10);
console.log("in số hàng chục:", ten);
unit = n%10;
console.log("in số hàng đơn vị", unit);
const sum2 = ten + unit;
console.log("tổng của 2 ký số:", sum2);