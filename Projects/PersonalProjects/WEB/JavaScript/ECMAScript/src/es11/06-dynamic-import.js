const button = document.getElementById('btn')

button.addEventListener("click", async function () {
    const module = await import('./module')
})