//**Estrcutura para fechas */
const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec('2022-01-02')
console.table(matchers)