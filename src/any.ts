import axios from 'axios'
export {}

let url: string = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((response) => {
	interface Article {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  let data: Article[] = response.data

  data = [
    {
      userId: 3,
      id: 2,
      title: 'check Article type',
      completed: true,
    },
  ]

  console.log(data)
})
