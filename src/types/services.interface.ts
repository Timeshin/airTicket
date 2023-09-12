import { CurrencyType } from './filterStore.interface'

export type Stops = 0 | 1 | 2 | 3
export type Carriers = 'SU' | 'S7' | 'TK' | 'BA'

export interface ITicket {
	id: number
	price: number
	origin: string
	origin_name: string
	destination: string
	destination_name: string
	departure_date: string
	departure_time: string
	arrival_date: string
	arrival_time: string
	carrier: Carriers
	stops: Stops
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
