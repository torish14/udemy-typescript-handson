export {}

// 関数式
// 関数宣言よりもスコープや再宣言が厳密
const returnNothing = function () {
  console.log('I dont return anything!')
}

console.log(returnNothing())
