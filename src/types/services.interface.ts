import { CurrencyType } from './filterStore.interface'

export interface ITicket {
	id: number
	price: number
	date: string
	arrives: string
	origin: string
	destination: string
	stops: 0 | 1 | 2 | 3
}

export interface ICurrencyResponse {
	base: 'RUB'
	date: string
	rates: {
		[key in CurrencyType['name']]: number
	}
	success: boolean
	timestamp: number
}

export interface ICurrencyResponseError {
	error: {
		code: string
		message: string
	}
}
