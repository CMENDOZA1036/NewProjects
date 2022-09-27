

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

let data = {id: 1, ...person, country}
console.log(data)

//! rest

function sum (num, ...values) {
    console.log(values);
    console.log(num + values[0])
    return num + values[0]
}

sum (1,1,2,3,5,8,9)