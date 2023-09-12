import { Stops } from 'src/types/services.interface'

interface IStopsData {
	text: string
	value: Stops | 'all'
}

export const stopsData: IStopsData[] = [
	{
		text: 'Все',
		value: 'all'
	},
	{
		text: 'Без пересадок',
		value: 0
	},
	{
		text: '1 пересадка',
		value: 1
	},
	{
		text: '2 пересадки',
		value: 2
	},
	{
		text: '3 пересадки',
		value: 3
	}
]
