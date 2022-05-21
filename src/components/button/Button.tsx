import { FC } from 'react';

import styles from './Button.module.scss';

interface IProps {
	text: string;
	extraClass?: string;
	handleClick: (val?: any) => void;
}

const Button: FC<IProps> = ({ handleClick, text, extraClass = '' }) => {
	return (
		<button
			className={`${styles.defaultButton} ${extraClass}`}
			onClick={() => handleClick()}
		>
			{text}
		</button>
	);
};
export default Button;
