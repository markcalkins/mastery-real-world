import axios from 'axios'

const apiClient = axios.create({
  // use json-server to load db.json from sample-server folder
  // to initiate: json-server --watch db.json
  // this makes it available via http://localhost:3000/
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events' + id)
  }
}