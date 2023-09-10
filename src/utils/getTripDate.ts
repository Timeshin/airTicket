import dayjs from 'dayjs'

const getTripDate = (date: string) => dayjs(date).format('D MMM YYYY, ddd')

export default getTripDate
