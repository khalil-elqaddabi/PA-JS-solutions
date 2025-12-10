//  Solution de exercices de niveau 3 

const date = [12,5,8,130,130,44,9,2,77,21,56,3,14,28,1,65,7,38,11,50];
const gg=date.length
// ================================================
// 1 :

// A:
console.log(date.reduce((a,b)=> a*b))


// B:
let p=1
for(let i=0;i<gg;i++){
    p*=date[i]
}
console.log(p)

// ================================================
// 2 :
// A:
const sorting = date.sort((a,b)=> a-b)
// console.log(sorting)
const mid = Math.floor(sorting.length/2)
let value = date[mid]
console.log(value)


// B:
for(let i=0;i<gg;i++){
    for(let j=0;j<gg-1-i;j++){
        if(date[j]>date[j+1]){
            const tmp = date[j]
            date[j]=date[j+1]
            date[j+1]=tmp
        }
    }
}
console.log(date)


const md = Math.floor(date.length/2)
let valeur = date[md]
console.log(valeur)

// ================================================
// 3 :
// A:
const cumu =[]
date.reduce((a,b)=>{
const newC = a+b
cumu.push(newC)
return newC
},0)
console.log(cumu)

// B:
let arr = []
let sum =0
for(let i=0;i<gg;i++){
    sum+=date[i]
    arr.push(sum)
}
console.log(arr)


// ================================================
// 4 :
// A:
console.log( Array.from(new Set(date)).sort((a,b)=>a-b))


// B:
const uni=[]
for(let i=0;i<gg;i++){
    if(!uni.includes(date[i]))
        uni.push(date[i])
}

for(let i=0;i<uni.length;i++){
    for(let j=0;j<uni.length-1-i;j++){
        if(uni[j]>uni[j+1]){
            const tmp = uni[j]
            uni[j]=uni[j+1]
            uni[j+1]=tmp
        }
    }
}
console.log(uni)


// ================================================
// 5 :

// A:
const [L50, G50]=date.reduce((a, v)=>{
    if(v<50){
        a[0].push(v)
    }
    else{
        a[1].push(v)
    }
    return a;
},[[],[]])
console.log(L50)
console.log(G50)

// B:
const l50=[]
const g50=[]
for(let i=0;i<gg;i++){
    if(date[i]<50)
        l50.push(date[i])
    else
    g50.push(date[i])
}
console.log(l50)
console.log(g50)


// ================================================
// 6:
// A:
console.log([...date].sort((a,b)=>a-b).slice(0,3))


// B:
const tab=[]
for(let i=0;i<gg;i++){
    for(let j=0;j<gg-1-i;j++){
        if(date[j]>date[j+1]){
            const tmp = date[j]
            date[j]=date[j+1]
            date[j+1]=tmp
        }
    }
}

for(let i=0;i<3;i++){
    tab.push(date[i])
}
console.log(tab)

// ================================================
// 7 :

console.log(date.sort((a,b)=>b-a).slice(0,3))


// B:
const t=[]
for(let i=0;i<gg;i++){
    for(let j=0;j<gg-1-i;j++){
        if(date[j]<date[j+1]){
            const tmp = date[j]
            date[j]=date[j+1]
            date[j+1]=tmp
        }
    }
}

for(let i=0;i<3;i++){
    t.push(date[i])
}
console.log(t)


// ================================================
// 8 :

// A:
// ???


// ================================================
// 9:
// A:
console.log(date.map((a,i)=>a*i))

// B:
const loop=[]
for(let i= 0;i<gg;i++){
    loop.push(date[i]*i)
    
}
console.log(loop)


// ================================================
// 10 :
// A:
console.log(date.map(v=>v<10?0:v))

// B:
const zero=[]
for(let i=0;i<gg;i++){
    const value=date[i] < 10 ? 0 : date[i]
    zero.push(value)
}
console.log(zero)


// ================================================
// 11 :
// A:
const group =[]
for(let i=0;i<gg;i+=4){
    group.push(date.slice(i,i+4))
}
console.log(group)


// B:
// ???


// ================================================
// 12 :
// A:

