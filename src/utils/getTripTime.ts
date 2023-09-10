import dayjs from 'dayjs'

const getTripTime = (date: string) => dayjs(date).format('HH:MM')

export default getTripTime
