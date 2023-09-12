import { AxiosError } from 'axios'
import { makeAutoObservable } from 'mobx'
import CurrencyService from 'src/services/currency.service'
import { CurrencyType } from 'src/types/filterStore.interface'
import { ICurrencyResponseError } from 'src/types/services.interface'

class CurrencyStore {
	currency: CurrencyType = {
		name: 'RUB',
		symbol: '₽'
	}

	currencyAmount = 1

	status: 'error' | 'loading' | 'success' = 'success'

	constructor() {
		makeAutoObservable(this)
	}

	*changeCurrency(currencyData: CurrencyType) {
		const oldCurrency = this.currency
		this.currency = currencyData
		this.status = 'loading'

		try {
			const { rates } = yield CurrencyService.getRubToCurrencyData(currencyData.name) // Max 250 request ~ 220 left

			this.currencyAmount = rates[currencyData.name]
			this.status = 'success'
		} catch (error) {
			const typedError = error as AxiosError<ICurrencyResponseError>
			console.log(typedError.response?.data.error.message || typedError.message)

			this.currency = oldCurrency
			this.status = 'error'
		}
	}
}

export default new CurrencyStore()
