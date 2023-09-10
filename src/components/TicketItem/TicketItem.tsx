import { FC } from 'react'
import { ITicket } from 'src/types/services.interface'
import { getTripDate, getTripTime } from 'src/utils'
import { observer } from 'mobx-react-lite'
import CurrencyStore from 'src/store/currencyStore'

import { Button } from 'src/components'

import classes from './TicketItem.module.scss'

interface ITicketItem {
	ticket: ITicket
}

const TicketItem: FC<ITicketItem> = observer(({ ticket: { arrives, date, destination, origin, price, stops } }) => (
	<div className={classes.ticket}>
		<div className={classes.ticket__price}>
			<img src='/assets/images/S7.png' alt='Ticket logo' />
			<Button>
				Купить
				<br /> за{' '}
				{CurrencyStore.status === 'loading'
					? ''
					: `${Math.round(price * CurrencyStore.currencyAmount)} ${CurrencyStore.currency.symbol}`}
			</Button>
		</div>
		<div className={classes.ticket__content}>
			<div className={classes.tripTime}>
				<div className={classes.origin}>{getTripTime(date)}</div>
				<div className={classes.stops}>
					{stops > 1 ? `${stops} пересадки` : stops === 0 ? 'без пересадок' : `${stops} пересадка`}
				</div>
				<div className={classes.destination}>{getTripTime(arrives)}</div>
			</div>
			<div className={classes.tripInfo}>
				<div className={classes.tripInfo__origin}>
					<p>{origin}</p>
					<p>{getTripDate(date)}</p>
				</div>
				<div className={classes.tripInfo__destination}>
					<p>{destination}</p>
					<p>{getTripDate(arrives)}</p>
				</div>
			</div>
		</div>
	</div>
))

export default TicketItem
