import { FC, InputHTMLAttributes } from 'react'

import classes from './Checkbox.module.scss'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
	text: string
}

const Checkbox: FC<ICheckbox> = ({ text, value, ...props }) => (
	<label className={classes.checkbox}>
		<input {...props} type='checkbox' value={value} />
		{text}
	</label>
)

export default Checkbox
