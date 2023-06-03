// let a = Number(prompt(`enter your number`))
// for(i=0;i<=a;i+=2){
//     console.log(i)
// }
// for(i=0;i<=a;i+=1){
//     console.log(i)
// }

//b2b-demo
// let a = parseFloat(prompt(`enter your number`))
// let b = parseInt("a,10")
// console.log(b)

//b2c
// let factorial = 1
// let a = Number(prompt(`enter your number`))
// for(i=1;i<=a;i++){
//     factorial *= i;
// }
// console.log(factorial);


//b2d
// let a = Number(prompt(`enter number`))
// let sum = 0
// for(i=0;i<a;i++){
//     sum+=i
// }
// console.log(sum)

//b2e
// let a = Number(prompt(`enter number`))
// for(i=1;i<a && a%i===0;i++){
//     console.log(i)
// }

//b2f

// let a = Number(prompt(`enter number`))
// for(i=2;i<a;i++){
//     if(a%i!=0){
//         console.log(`đây không là số nguyên tố`)
//     }
//     else(`Đây là số nguyên tố`)
// }

//b2i


//read
//1
//  let menu = ["Trung" , "xuc xich" ,"pa te" ,"thit xien"];
// //console.log(menu);
// console.table(menu);
// let i = prompt(`enter your number of the menu`)
// if(i<=0||i>menu.length){
//     console.log(`enter your number of the menu again`)
// }
// else{console.log(menu[i-1])}

//created
 let soccerPlayer = [`messi`,`ronaldo`,`neymar`]
// let moreName = prompt(`Do you want to add player names? Y or N`)
// let Y = `y`
// let N = `n`
// if(moreName!==Y||moreName!==N){
//    console.log(`please answer again!`)
// }
// switch (moreName) {
//     case "Y":
//         let newName = prompt(`What is the name of the player you want to add to the list?`);
//         soccerPlayer.push(newName);
//         console.log(soccerPlayer);
//         break;
//     case "N":
//         console.log(`Thank you!`);
//     default:
//         break;
// }

//update
// for(i=0;i<soccerPlayer.length;i++){
//     console.log(`vi tri: ${i+1} ${soccerPlayer[i]}`)
// }
// let fixName = prompt(`Do you wanna change the player name? Y or N`)
// let Y = `y`
// let N = `n`
// if(fixName!==Y||fixName!==N){
//    console.log(`please answer again!`)
// }
// switch (fixName) {
//     case "Y":
//         let newPosition = Number(prompt(`enter a new position number`))
//         let newPlayer = prompt(`enter your name of player`)
//         if(newPosition<0 || newPosition>soccerPlayer.length){
//             console.log(`Fill again`)
//         }else(soccerPlayer[newPosition-1]=newPlayer)
//         break;
//     case "N":
//         console.log(`Goodbye!`);
//     default:
//         break;
// }

//delete
// for(i=0;i<soccerPlayer.length;i++){
//     console.log(`vi tri: ${i+1} ${soccerPlayer[i]}`)
// }

let deleteName = prompt(`Do you wanna delete the player name? Y or N`)
// let Y = `y`
// let N = `n`
// if(deleteName!==Y||deleteName!==N){
//    console.log(`please answer again!`)
// }
switch (deleteName) {
    case `Y`:
        let aPosition = Number(prompt(`enter your position`))
        if(soccerPlayer[aPosition-1]===undefined){
            console.log(`fill again`);
        }else{soccerPlayer.splice(aPosition-1)};
        
        break;
    case `N`:
        console.log(Goodbye)

    default:
        break;
}



