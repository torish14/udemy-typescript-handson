export {}

function error(message: string): never {
  throw new Error(message)
}

try {
  let result = error('Something went wrong!')
  console.log(result)
} catch (e) {
  console.log(e)
}

let foo: void = undefined
// never には、undefined も null も許されない
let bar: never = error('Something went wrong!')
