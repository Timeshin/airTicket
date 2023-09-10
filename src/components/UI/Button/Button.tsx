import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import classes from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const Button: FC<IButton> = ({ children, ...props }) => (
	<button type='button' className={`${classes.button} ${props.className}`} {...props}>
		{children}
	</button>
)
export default Button
