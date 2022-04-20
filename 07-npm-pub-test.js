// import {dateFormat} from 'geekhallutils' // error
const { dateFormat } = require('geekhallutils')

const dt = new Date()
console.log(dt)
const date = dateFormat(dt)
console.log(date)

