import axios from 'axios'

const fetchDBInstance = axios.create({
	baseURL: 'http://localhost:8080/'
})

export default fetchDBInstance
