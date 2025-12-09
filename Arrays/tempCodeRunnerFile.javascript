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
console.log(tab)