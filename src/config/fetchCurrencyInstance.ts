import axios from 'axios'

const fetchCurrencyInstance = axios.create({
	baseURL: 'https://api.apilayer.com/exchangerates_data/',
	headers: {
		apiKey: 'GDSzMCu6MpmGakwOMd4nWlVWkxqrN0GX'
	}
})

export default fetchCurrencyInstance
