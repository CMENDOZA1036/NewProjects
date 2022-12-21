const button = document.getElementById('btn')

button.addEventListener ("click",  async function()  {
    const module = await import('./module')
    console.log(module)
    module.hello()
})