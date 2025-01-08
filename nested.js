const person = {name: 'Alice', address: {street: '123 Main St',
city: 'Los Angeles', zip: '90001'}, age: 25};
let {address:{city,zip}}=person
console.log(city,zip)    