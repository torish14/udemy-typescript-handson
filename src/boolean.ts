// cannot redeclare block-scoped variable 'name' を防ぐ
export {}

let name = 'TypeScript'

let isFinished: boolean = true
isFinished = false
// isFinished = 1
console.log(isFinished)
