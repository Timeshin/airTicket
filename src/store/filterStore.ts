import { makeAutoObservable } from 'mobx'
import { CurrencyType, StopsType } from 'src/types/filterStore.interface'

class FilterStore {
	currency: CurrencyType = {
		name: 'RUB',
		symbol: '₽'
	}

	filterStops: StopsType[] | [] = []

	constructor() {
		makeAutoObservable(this)
	}

	changeStops(stopValue: StopsType | 'all') {
		if (stopValue === 'all') {
			this.filterStops = []

			return
		}

		if (this.filterStops.some((stop) => stop === stopValue)) {
			this.filterStops = this.filterStops.filter((stop) => stop !== stopValue)

			return
		}

		this.filterStops = [...this.filterStops, stopValue]
	}
}

export default new FilterStore()
