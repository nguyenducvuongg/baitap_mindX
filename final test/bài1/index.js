// let numberA = document.getElementsByClassName("numberA")
// const a = Number(numberA)
// console.log(numberA)
// let numberB = document.getElementsByClassName("numberB")
// const b = Number(numberB)
// console.log(numberB)
// function total(){
//     if(numberA > numberB){
//         console.log("Vui long nhap lai A va B")
//     }
// }


// let a = Number(prompt(`enter your number A`))
// let b = Number(prompt(`enter your number B (B>A)`))

// console.log(`Các số nguyên tố từ ${a} đến ${b} là:`);
// for (let i = a; i <= b; i++) {
//   let isReal = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isReal = false;
//       break;
//     }
//   }
//   if (isReal) {
//     console.log(i);
//   }
  
//   let sumArray = [i]
//   function totail(sumArray){
//     let sum=0;
//     for (let q = 0; q < sumArray.length; q++){
//         sum += sumArray[q];
//     }
     
//     return sum;
//   }
// }
// console.log(`${totail(sumArray)}`);


const numA = document.getElementById('numberA');
const numB = document.getElementById('numberB')

function sum(){
    const a = Number(numA.value);
    const b = Number(numB.value);
    const sum= 0;
    if(a>=b){
        alert('enter again')
    }
    else{
        for(let i = a; i <= b ; i++){
            let flag = true;
            for(j = 2; j < i; j++){
                if(i % j==0){
                    flag = false;
                    break;
                }
            }
            if(i > 1 && flag === true){
                sum += i;
            }
        }
        document.getElementById('total').textcontent = 'ket qua la' + sum;
        

    }

}