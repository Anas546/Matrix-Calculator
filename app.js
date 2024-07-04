
// let  matrix1= [
//           [1,   2],
//           [3,   4],
// ]

// let matrix2=[
//           [5,   6],        
//           [7,   8],
// ]
// console.log(matrix1 [0][0] + matrix2 [0][0])
// console.log(matrix1 [0][1] + matrix2 [0][1])
// console.log(matrix1 [1][0] + matrix2 [1][0])
// console.log(matrix1 [1][1] + matrix2 [1][1])

function matrix(event){
{
    event.preventDefault()
}

let mOne1 = document.getElementById("mOne1").value
mOne1 = Number(mOne1)
let mOne2 = document.getElementById("mOne2").value
mOne2 = Number(mOne2)
let mOne3 = document.getElementById("mOne3").value
mOne3 = Number(mOne3)
let mOne4 = document.getElementById("mOne4").value
mOne4 = Number(mOne4) 
let FirstValue= [ mOne1, mOne2, mOne3, mOne4 ] 

let mTwo1 = document.getElementById("mTwo1").value
mTwo1 = Number(mTwo1)
let mTwo2 = document.getElementById("mTwo2").value
mTwo2 = Number(mTwo2)
let mTwo3 = document.getElementById("mTwo3").value
mTwo3 = Number(mTwo3)
let mTwo4 = document.getElementById("mTwo4").value
mTwo4 = Number(mTwo4)
 let secondValue = [ mTwo1, mTwo2, mTwo3, mTwo4]


let r1= FirstValue[0] - secondValue[0]
let r2= FirstValue[1] - secondValue[1]
let r3= FirstValue[2] - secondValue[2]
let r4= FirstValue[3] - secondValue[3]

 document.getElementById("r1").innerHTML=r1
 document.getElementById("r2").innerHTML=r2
 document.getElementById("r3").innerHTML=r3
 document.getElementById("r4").innerHTML=r4
}
document.addEventListener('submit',matrix)















