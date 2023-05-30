let a = Number(prompt("Nhập biến a:"))
let b = Number(prompt("Nhập biến b:"))
let c = Number(prompt("Nhập biến c:"))
let d = Number(b*b-4*a*c)

if (d < 0) { 
    console.log("Vô nghiệm")
}
if (d > 0) {
    console.log(`Có 2 nghiệm phân biệt là: X1 = ${(-b + d)/(2*a)} và X2 =${(-b -d)/(2*a)}`)
}
if (d === 0) {
    console.log(`Có nghiệm kép là: X1=X2= ${-b/(2*a)}`)
 }
