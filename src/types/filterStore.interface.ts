export type CurrencyType = IUSDCurrency | IEURCurrency | IRUBCurrency

export type StopsType = 0 | 1 | 2 | 3

interface IUSDCurrency {
	name: 'USD'
	symbol: '$'
}

interface IEURCurrency {
	name: 'EUR'
	symbol: '€'
}

interface IRUBCurrency {
	name: 'RUB'
	symbol: '₽'
}
