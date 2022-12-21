
//**Objecto */

const user = { 
    username: 'gndx',
    age: 34,
    country: 'CO'
}

//**Con este sacamos a username fuera del objecto. Y cuando lo miramos por consola, aparece solo username y dentro del objecto los demas valores asignados a vlues */

const {username, ...values} = user

console.log(username)
console.log(values)