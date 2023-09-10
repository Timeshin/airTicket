import { CurrencyFilter, StopsFilter } from 'src/components'

import classes from './Filters.module.scss'

const Filters = () => {
	return (
		<aside className={classes.filter}>
			<CurrencyFilter />
			<StopsFilter />
		</aside>
	)
}

export default Filters
