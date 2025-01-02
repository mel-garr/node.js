#!/usr/bin/env node
console.log('hello world')
const note = process.argv[2]
console.log(note)
const newnote = {
    'Content' : note,
    'Date'    : Date.now() 
}
console.log(newnote)
// console.log(process.pid)