import axios from 'axios'
export {}

let url: string = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((response) => {
  console.log(response)
})
