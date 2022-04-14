export {}

// 関数式
// 関数宣言よりもスコープや再宣言が厳密
function returnNothing(): undefined {
  console.log('I dont return anything!')
  return undefined
}

console.log(returnNothing())
