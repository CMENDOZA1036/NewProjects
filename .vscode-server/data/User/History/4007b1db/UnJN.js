

//! destructuring
//* arrays destructuring

let fruits = [ 'apple', 'Banana']
let [a, b] = fruits
console.log (a,b)


//* objects destrututing

let user = { username: 'OScar', age: 34}
let {username, age} = user
console.log (username, age)


//! spread operator

let person = {name: 'oscar', age: 28}
let country = 'MX'

let data = {...person, country}
console.log(data)