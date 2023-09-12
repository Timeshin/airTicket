export type CurrencyType = IUSDCurrency | IEURCurrency | IRUBCurrency

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
