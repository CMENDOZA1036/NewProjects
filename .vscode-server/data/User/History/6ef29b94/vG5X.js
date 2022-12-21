//! enahced object literals

function newUser(user, age, country,uId) {
    return{
        user,
        age,
        country,
        id: uId
    }

}

console.log (newUser('cma', 34, 'CL', 1))