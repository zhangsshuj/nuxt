import axios from 'axios'
const myaxios = axios.create({
  baseURL: 'https://mock.yonyoucloud.com/mock/7094'
})
const http= {
  get: function (url,data) {
    return myaxios({
      methods:'get',
      url: url,
      data: data
    })
  }
}
export default ({app},inject) => {
  inject('http',http)
}
