import { FC, ReactNode } from 'react'

import classes from './MainPage.module.scss'

interface IMainPage {
	children: ReactNode
}

const MainPage: FC<IMainPage> = ({ children }) => (
	<div className={classes.wrapper}>
		<div className={classes.mainPage}>
			<div className={classes.logo}>
				<img src='/assets/icons/Logo.svg' alt='Logo' />
			</div>
			{children}
		</div>
	</div>
)

export default MainPage
