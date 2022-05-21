import { ChangeEvent, FC } from 'react';

import styles from "./Input.module.scss"

interface IProps {
	value: string;
	placeholder: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ placeholder, handleChange, value }) => {
	return (
		<input
      className={styles.input}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={(e) => handleChange(e)}
		/>
	);
};
export default Input;
