import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/ru'
dayjs.extend(customParseFormat)
dayjs.locale('ru')

const getTripDate = (date: string) => dayjs(date, 'DD.MM.YY').format('D MMM YYYY, ddd')

export default getTripDate
