import { Carriers } from 'src/types/services.interface'
import BALogo from 'src/assets/images/BA.png'
import S7Logo from 'src/assets/images/S7.png'
import SULogo from 'src/assets/images/SU.png'
import TKLogo from 'src/assets/images/TK.png'

const getAirlineLogo = (carrier: Carriers) => {
	switch (carrier) {
		case 'BA':
			return BALogo
		case 'S7':
			return S7Logo
		case 'TK':
			return TKLogo
		case 'SU':
			return SULogo
		default:
			return
	}
}

export default getAirlineLogo
