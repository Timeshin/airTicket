import { observer } from 'mobx-react-lite'
import { useCallback, useMemo } from 'react'
import { useEffect, useState } from 'react'
import TicketsService from 'src/services/tickets.service'
import FilterStore from 'src/store/filterStore'
import { ITicket } from 'src/types/services.interface'
import TicketItem from '../TicketItem/TicketItem'

import classes from './TicketList.module.scss'

const TicketList = observer(() => {
	const { filterStops } = FilterStore
	const [tickets, setTickets] = useState<ITicket[]>([])
	const [status, setStatus] = useState<'error' | 'loading' | 'success'>('loading')

	const filteredTickets = useMemo(() => {
		if (!filterStops.length) {
			return tickets
		}

		return tickets.filter(({ stops }) => filterStops.some((stop) => stop === stops))
	}, [filterStops, tickets])

	const getTicketsRequest = useCallback(async () => {
		setStatus('loading')

		try {
			const tickets = await TicketsService.getTickets()

			setTickets(tickets)
			setStatus('success')
		} catch (error) {
			setStatus('error')
		}
	}, [])

	useEffect(() => {
		getTicketsRequest()
	}, [getTicketsRequest])

	if (status === 'loading') {
		return <h1 className={classes.loading}>Loading...</h1>
	}

	if (status === 'error') {
		return <h1 className={classes.error}>Someting went wrong :(</h1>
	}

	return (
		<main className={classes.tickets}>
			{filteredTickets.map((ticket) => (
				<TicketItem key={ticket.id} ticket={ticket} />
			))}
		</main>
	)
})

export default TicketList
