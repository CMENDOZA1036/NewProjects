function newUser (name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'CL';
    console.log (name,age,country)
}

newUser ()

newUser ('Cristian', 30, 'MX')

//* Nueva forma

function newAdmin ( name = 'oscar', age = 32, country = 'CL'){
    console.log (name, age, country)
}

newAdmin ()