import { FC, PropsWithChildren } from 'react';
import Header from '../header/Header';
import styles from './Layout.module.scss';

interface IProps {
	title: string
}

const Layout:FC<PropsWithChildren<IProps>> = ({children, title}) => {
	return (
		<div className={styles.layout}>
			<Header title={title}/>
			{children}
		</div>
	)
};
export default Layout;
