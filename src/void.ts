export {}

// 関数式
// 関数宣言よりもスコープや再宣言が厳密
function returnNothing(): void {
  console.log('I dont return anything!')
}

console.log(returnNothing())
