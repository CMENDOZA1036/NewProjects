async function* anotherGenerator () {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3)
}

const other = anotherGenerator ()
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log ('Hello!!')


async function arrayOfName (array) {
    for await (let value of array) {
        console.log(value)
    }
}

const names = arrayOfName(['Oscar', 'David', 'Ana'])
console.log ('After')