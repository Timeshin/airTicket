import CurrencyStore from 'src/store/currencyStore'
import { observer } from 'mobx-react-lite'
import { currencyFilterData } from './CurrencyFilter.meta'
import { CurrencyType } from 'src/types/filterStore.interface'

import classes from './CurrencyFilter.module.scss'

const CurrencyFilter = observer(() => {
	const { currency } = CurrencyStore

	const onChangeCurrency = (currencyItem: CurrencyType) => {
		CurrencyStore.changeCurrency(currencyItem)
	}

	return (
		<div className={classes.currencyFilter}>
			<h2 className={classes.title}>Валюта</h2>
			<div className={classes.content}>
				{currencyFilterData.map((currencyItem, index) => (
					<div
						key={index}
						className={`${classes.currencyFilterItem} ${currency.name === currencyItem.name ? classes.active : ''}`}
						onClick={() => onChangeCurrency(currencyItem)}
					>
						{currencyItem.name}
					</div>
				))}
			</div>
		</div>
	)
})

export default CurrencyFilter
