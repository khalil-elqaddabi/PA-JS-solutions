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

// ================================================
// 7 :

// A:
console.log(new Set(date))

// B:
let unique =[]
for(let i=0;i<gg;i++){
    if(!unique.includes(date[i])){
        unique.push(date[i])
    }
}
console.log(unique)



// ====================================
// JavaScript Array Manipulation Problems – Niveau Intermédiaire
// ====================================

// 8 :

// A:
let pairs = date.filter(a=>a%2 ==0)
console.log(pairs)

let impairs = date.filter(a=>a%2 !==0)
console.log(impairs)


// B:
let pairsB=[]
let impairsB=[]

for(let i=0; i< gg;i++){
    if(date[i]%2==0){
        pairsB.push(date[i])
    }else{
        impairsB.push(date[i])
    }
}
console.log('pairs :',pairsB)
console.log('impairs :',impairs)



// ================================================
// 9 :

// A:

console.log(date.slice(0,5))
// console.log(date)

// B:
let slic =[]
for(let i=0;i<5;i++){
    
        slic.push(date[i])
    
}
console.log(slic)

// ================================================
// 10 :

// A:
console.log(date.slice(-5))


// B:
 let slicM =[]
for(let i=gg-5;i<gg;i++){
    slicM.push(date[i])
}
console.log(slicM)


// ================================================
// 11 :

// A:
console.log(date.map(a=>a*a))

// B:
let mult =[]
for(let i=0;i<gg;i++){
    // date[i]*date[i]
    mult.push(date[i]*date[i])
}
console.log(mult)

// ================================================
// 12 :
// A:
console.log(date.filter(a=> a<10))


// B:
let inf =[]
for(let i=0;i<gg;i++){
    if(date[i]<10){
        inf.push(date[i])
    }
}
console.log(inf)