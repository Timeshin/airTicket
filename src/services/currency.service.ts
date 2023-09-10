import { AxiosInstance } from 'axios'
import { CurrencyType } from '../types/filterStore.interface'
import fetchCurrencyInstance from 'src/config/fetchCurrencyInstance'
import { ICurrencyResponse } from 'src/types/services.interface'

class CurrencyService {
	private readonly apiInstance: AxiosInstance

	constructor(api: AxiosInstance) {
		this.apiInstance = api
	}

	getRubToCurrencyData = async (currency: CurrencyType['name']) => {
		const { data } = await this.apiInstance.get<ICurrencyResponse>('latest', {
			params: {
				symbols: currency,
				base: 'RUB'
			}
		})

		return data
	}
}

export default new CurrencyService(fetchCurrencyInstance)
