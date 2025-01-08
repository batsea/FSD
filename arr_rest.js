function add(a){
    let sum=0
    a.forEach(ele=>{
        sum+=ele
    })
    return sum
}

let s=add([10,20,30,40,60])
console.log(s)