import { Filters, TicketList } from './components'
import { MainPage } from './layouts'

const App = () => (
	<MainPage>
		<div className='content'>
			<Filters />
			<TicketList />
		</div>
	</MainPage>
)

export default App
