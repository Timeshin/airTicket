import { AxiosInstance } from 'axios'
import fetchDBInstance from 'src/config/fetchDBInstance'
import { ITicket } from 'src/types/services.interface'

class TicketsService {
	private readonly apiInstance: AxiosInstance

	constructor(api: AxiosInstance) {
		this.apiInstance = api
	}

	getTickets = async () => {
		const result = await this.apiInstance.get<ITicket[]>('tickets')

		return result.data
	}
}

export default new TicketsService(fetchDBInstance)
