// bai4
// let X = prompt("enter (+;-;*;/)");
// let Y = prompt("enter your number frist");
// let Z = prompt("enter your number second");
// if ( X==="+") {
    
//     console.log(Number(Y)+Number(Z))
// }
// else if (X==="-"){
//     console.log(Number(Y)-Number(Z))
// }
// else if(X==="*"){
//     console.log(Number(Y)*Number(Z))
// }
// else if(X==="/"){console.log(Number(Y)/Number(Z))}
    

// bai1
//  let X = prompt("enter your frist number")
//  let Y = prompt("enter your second number")
//  let xNumber = Number(X)
//  let yNumber = Number(Y)
//  if (xNumber > yNumber) { 
//     console.log(`${xNumber} > ${yNumber}`) 
// }
//  else if (xNumber < yNumber) { 
//     console.log(`${xNumber} < ${yNumber}`) 
// }
//cach2
// let Dau= prompt("Nhập vào phép tính: +,-,*,/");
// let b = prompt("Nhập vào số thứ nhất:");
// let c = prompt("Nhập vào số thứ hai:");

// switch (Dau) {
//     case "+":
//         console.log(`Tổng của hai số là: ${Number(b) + Number(c)}`);
//         break;
//     case "-":
//         console.log(`Hiệu của hai số là: ${Number(b) - Number(c)}`);
//         break;
//     case "*":
//         console.log(`Tích của hai số là: ${Number(b) * Number(c)}`);
//         break;
//     case "/":
//         console.log(`Phép chia hai số là: ${Number(b)/Number(c)}`)}
//         break;
//     default:
//         console.log(`hãy thử lại`)
   
// }


//bai2
// let X = prompt(`enter number`)
//  let xNumber = Number(X)
//  if(xNumber%3 === 0){
//     console.log(`${xNumber} là một số chia hết cho 3`)
//     console.log(`kết quả ${xNumber/3}`)
//  }
//  else{
//     console.log(`${xNumber} không chia hết cho ba`)
//  }

// bai3
// let yourMouth = prompt(`enter your mouth`)
// let yourMouthnum = Number(yourMouth)

// switch (yourMouthnum) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Febuary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("error")
// }


//bai5-demo
// let a = prompt(`enter your number`)
// let aNum = Number(a)
// for(let i = 1;i<=aNum; i%i===0){
//     console.log(i);
// }
 //bai6
// let a = Number(prompt("Nhập biến a:"))
// let b = Number(prompt("Nhập biến b:"))
// let c = Number(prompt("Nhập biến c:"))
// let d = Number(b*b-4*a*c)

// if (d < 0) { 
//     console.log("Vô nghiệm")
// }
// if (d > 0) {
//     console.log(`Có 2 nghiệm phân biệt là: X1 = ${(-b + d)/(2*a)} và X2 =${(-b -d)/(2*a)}`)
// }
// if (d === 0) {
//     console.log(`Có nghiệm kép là: X1=X2= ${-b/(2*a)}`)
//  }

//bai7
// let a=prompt("enter your number:");
// let aNumber=Number(a);
// if(aNumber>=1&&aNumber<=3){
//     console.log("spring")
// }
// else if (aNumber>=4 && aNumber<=6){
//     console.log("summer")
// }
// else if (aNumber>=7 && aNumber<=9){
//     console.log("autumn")
// }
// else if (aNumber>=10 && aNumber<=12){
//     console.log("winter")
// }
// else {console.log("error")}