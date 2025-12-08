const date = [12,5,8,130,130,44,9,2,77,21,56,3,14,28,1,65,7,38,11,50];
const gg = date.length;
// 1 : Invercer le tableau

// A :
console.log('.reverce :',date.reverse())

// // B : 


for (let i = 0; i <date.length / 2; i++) {
    const tmp = date[i];                           
    date[i] = date[date.length - 1 - i];           
    date[date.length - 1 - i] = tmp;               
}

console.log(date);


// why it's not working?
// let arr=[]
// for(let i= date.length ;i>=0 ;i++){
//     arr.push(date)
// }
// console.log(arr)


// ===============================================
// 2 : 
// A:
console.log(date.sort((a,b)=>a-b))

// B:

for(let i=0 ;i<date.length;i++){
    for(let j=0;j<date.length-1-i;j++)
        if(date[j]>date[j+1]){
            let tmp = date[j]
            date[j]=date[j+1]
            date[j+1]=tmp
        }
}
console.log(date)

// ===============================================

// 3 :
// A:
console.log(date.sort((a,b)=>b-a))

// B:

for(let i=0 ;i<date.length;i++){
    for(let j=0;j<date.length-1-i;j++)
        if(date[j]<date[j+1]){
            let tmp = date[j]
            date[j]=date[j+1]
            date[j+1]=tmp
        }
}
console.log(date)


// ===============================================
// 4 :

// A:

console.log(date.map(String))


// B:
let arr=[]
    for(let i=0;i<gg;i++){
        arr.push(String(date[i]))
    }
    console.log(arr)

    // ===============================================
// 5 :
// A:
console.log(date.filter((v,a) => a%2===0))

// B:
let indx=[]
for(let i=0 ; i<gg;i++){
    if(date[i]%2===0)
        indx.push(date[i])
}
console.log(indx)

// ===============================================
// 6 :
// A:
console.log(date.findIndex((a) => a===28))


// B:
let idx28 = 0
for(let i=0;i<gg;i++){
    if(date[i]===28){ 
        idx28=i
    break
    }
}
console.log(idx28)