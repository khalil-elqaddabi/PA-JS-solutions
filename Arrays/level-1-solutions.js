// solution de level 1:

const date = [12,5,8,130,130,44,9,2,77,21,56,3,14,28,1,65,7,38,11,50];

// =========================================
// 1 REcuperer tous les nombres pairs :

// A-filter  :

let pairsN = date.filter(a => a%2 ==0)
console.log(pairsN)

// B-boucle  :
let pairsNb = []
for(let i = 0; i<date.length ; i++){
    if(date[i]%2 ==0){
        pairsNb.push(date[i])
    }
}
console.log(pairsNb)


// =========================================
// 2. Récupérer tous les nombres impairs

// A :
let impairsN = date.filter(a => a%2 !==0)
console.log(impairsN)

// B-boucle  :
let impairsNb = []
for(let i = 0; i<date.length ; i++){
    if(date[i]%2 !==0){
        impairsNb.push(date[i])
    }
}
console.log(impairsNb)

// =========================================
//  3. Doubler chaque nombre du tableau

// A map :

const doublerNm = date.map(a =>a*2)
console.log('le double',doublerNm)


// B :
let doublerNb = []
for(let i =0 ; i< date.length; i++){
    doublerNb.push(date[i]*2)
}
console.log('le double',doublerNm)


// =========================================
//  4 : Trouver le plus grand nombre :

// A : 
const grandN = Math.max(...date)
console.log(grandN)
// ---

const maxN = date.reduce((CMxa,a) =>{
    return CMxa > a ? CMxa : a
},date[0])
console.log(maxN)


// B :

let max=date[0]
for(let i =0 ; i<date.length; i++){
    if(max < date[i] )
        max=date[i]
    }
    console.log(max)

// =========================================
//   5 : Trouver le plus petit nombre :

const petitN = Math.min(...date)
console.log(petitN)

// ---
const min = date.reduce((CMin ,a) =>{
    return CMin < a ? CMin : a
})
console.log(min)


// B :
let Min = date[0]
for(let i=0; i<date.length; i++){
    if(Min>date[i])
        Min=date[i]
}
console.log(Min)

// =========================================
// 6 : Calculer la somme de tableau :
// A :
const som = date.reduce((sN , a) =>sN+a)
console.log(som)

// B :
let somm = 0
for(let i =0 ; i < date.length ; i++){
    somm += date[i]
}
console.log(somm)


// =========================================
//  7 : Calculer la moyenne :
//  A :
const moyenne = date.reduce((M, a ) => M+a)
console.log(moyenne/date.length)

// B :
let S =0
for(let i =0;i<date.length;i++){
S+=date[i]
}
M=S/date.length
console.log(M)


// =========================================
// JavaScript Array Manipulation Problems – Niveau Beginner
// =========================================
// 8 : Trouver un nombre domme (ex:77)
// A : 
// 1\
const trouverN = date.includes(77)
console.log(trouverN)

// 2\
const trouver = date.find(a => a==77)
console.log(trouver)


// B :
isTrue=false;
for(let i=0 ;i<date.length;i++){
    if(date[i]==77)
        isTrue=true
}
console.log(isTrue)

// =========================================
// 9 : Recuperer les nombers suerieurs a 20

// A : 
console.log(date.filter(a => a>20))

// B :
let superN =[]
for(let i=0 ; i<date.length;i++){
    if(date[i]>20)
        superN.push(date[i])
}
console.log(superN)

// =========================================
// 10 : Verefier si tous les nombres sont positifs
// A : 
console.log(date.every(a =>a>0))

// B :
let IsTrue = true
for(let i= 0;i<date.length;i++){
    if(date[i]<=0){
        IsTrue=false
        break;
    }
}
console.log(IsTrue)

// =========================================
// 11 : verifier si au moins un nombers est superieur a 100


// A :
console.log(date.some(a => a>100))

// B :
theTrue = false
for(let i= 0;i<date.length;i++){
    if(date[i]>100)
        theTrue=true
}
console.log(theTrue)

// =========================================
// 12 : compter combien de nombres sont > 50 

// A : 

console.log(date.filter(a => a>50).length)

// B :
let count=0
for(let i=0 ;i<date.length;i++){
    if(date[i]>50)
        count++
}
console.log(count)