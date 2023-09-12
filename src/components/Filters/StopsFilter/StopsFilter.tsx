import { observer } from 'mobx-react-lite'
import { ChangeEvent } from 'react'
import { Checkbox } from 'src/components'
import FilterStore from 'src/store/filter.store'
import { Stops } from 'src/types/services.interface'
import { stopsData } from './StopsFilter.meta'

import classes from './StopsFilter.module.scss'

const StopsFilter = observer(() => {
	const { filterStops } = FilterStore

	const onSelectStops = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const value = target.value as Stops | 'all'

		if (value === 'all') {
			FilterStore.changeStops(value)
			return
		}

		FilterStore.changeStops(+value as Stops)
	}

	return (
		<div className={classes.stopsFilter}>
			<h3 className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
			<div className={classes.content}>
				{stopsData.map(({ text, value }) => (
					<Checkbox
						key={text}
						text={text}
						value={value}
						checked={filterStops.some((stop) => stop === value) || (!filterStops.length && value === 'all')}
						onChange={onSelectStops}
					/>
				))}
			</div>
		</div>
	)
})

export default StopsFilter
