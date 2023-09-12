import { makeAutoObservable } from 'mobx'
import { CurrencyType } from 'src/types/filterStore.interface'
import { Stops } from 'src/types/services.interface'

class FilterStore {
	currency: CurrencyType = {
		name: 'RUB',
		symbol: '₽'
	}

	filterStops: Stops[] | [] = []

	constructor() {
		makeAutoObservable(this)
	}

	changeStops(stopValue: Stops | 'all') {
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
