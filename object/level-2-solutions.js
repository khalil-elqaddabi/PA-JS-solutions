const users = [
  { id: 1, name: "Kamal", age: 22, city: "Marrakech", score: 45 },
  { id: 2, name: "Sami", age: 30, city: "Rabat", score: 72 },
  { id: 3, name: "Issam", age: 28, city: "Marrakech", score: 60 },
  { id: 4, name: "Oualid", age: 19, city: "Agadir", score: 33 },
  { id: 5, name: "Hassan", age: 33, city: "Casablanca", score: 80 },
  { id: 6, name: "Farah", age: 25, city: "Marrakech", score: 50 },
  { id: 7, name: "Salma", age: 40, city: "Rabat", score: 90 },
  { id: 8, name: "Hanae", age: 21, city: "Marrakech", score: 41 },
  { id: 9, name: "Ibrahim", age: 27, city: "Casablanca", score: 55 },
  { id: 10, name: "Jade", age: 24, city: "Agadir", score: 48 }
];

const T = users.length;
// ===================================================
// ex1 :
// A:
function ex1A(){
    let sortS = []
    sortS = users.sort((a,b)=>a.age-b.age)
    return sortS
}
console.log(ex1A(users))

// B:
function ex1B(){
    let sorted = [...users]
    for(let i =0 ; i<T;i++){
        for(let j=0; j<T; j++ ){
            if(sorted[j].age>sorted[j].age+1){
                let tmp = sorted[j].age
                sorted[j].age = sorted[j+1].age
                sorted[j+1].age=tmp
            }
        }
    }
    return sorted
}
console.log(ex1B(users))
