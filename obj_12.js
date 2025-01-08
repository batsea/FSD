function createProfile(obj){
    let {name,email}=obj
    return {name,email}
}

let profile = {name:"anku",age:23,email:"ABC@GAMIL.COM",add:"HYD"}
let o=createProfile(profile)
console.log(o)