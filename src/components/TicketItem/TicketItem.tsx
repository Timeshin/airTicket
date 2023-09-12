import { FC } from 'react'
import { ITicket } from 'src/types/services.interface'
import { observer } from 'mobx-react-lite'
import CurrencyStore from 'src/store/currency.store'
import { getAirlineLogo, getTripDate } from 'src/utils'

import { Button } from 'src/components'

import classes from './TicketItem.module.scss'

interface ITicketItem {
	ticket: ITicket
}

const TicketItem: FC<ITicketItem> = observer(
	({
		ticket: {
			arrival_date,
			arrival_time,
			carrier,
			departure_date,
			departure_time,
			destination,
			destination_name,
			origin_name,
			origin,
			price,
			stops
		}
	}) => (
		<div className={classes.ticket}>
			<div className={classes.ticket__price}>
				<img className={classes.carrier__logo} src={getAirlineLogo(carrier)} alt='Ticket logo' />
				<Button>
					Купить
					<br /> за{' '}
					{CurrencyStore.status === 'loading'
						? '...'
						: `${Math.round(price * CurrencyStore.currencyAmount)} ${CurrencyStore.currency.symbol}`}
				</Button>
			</div>
			<div className={classes.ticket__content}>
				<div className={classes.tripTime}>
					<div className={classes.origin}>{departure_time}</div>
					<div className={classes.stops}>
						{stops > 1 ? `${stops} пересадки` : stops === 0 ? 'без пересадок' : `${stops} пересадка`}
					</div>
					<div className={classes.destination}>{arrival_time}</div>
				</div>
				<div className={classes.tripInfo}>
					<div className={classes.tripInfo__origin}>
						<p>
							{origin}, {origin_name}
						</p>
						<p>{getTripDate(departure_date)}</p>
					</div>
					<div className={classes.tripInfo__destination}>
						<p>
							{destination}, {destination_name}
						</p>
						<p>{getTripDate(arrival_date)}</p>
					</div>
				</div>
			</div>
		</div>
	)
)

export default TicketItem
