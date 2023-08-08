import axios from 'axios'

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key:"dac8989b598af36f5f0b81f86bb009f9",
    language:"ko-KR"
  }
})

export default instance