import { ChangeEvent, FC } from 'react';

import Button from '../button/Button';
import Input from '../input/Input';

import styles from './AddCityWrapper.module.scss';

interface IProps {
	value: string;
	setValue: (e: ChangeEvent<HTMLInputElement>) => void;
	handleClick: () => void;
}

const AddCityWrapper: FC<IProps> = ({ value, setValue, handleClick }) => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.desc}>
				Добавьте город, который хотите отслеживать:{' '}
			</h3>
			<Input
				placeholder="Введите город"
				handleChange={(e) => setValue(e)}
				value={value}
			/>
			<Button
				text="Добавить"
				extraClass="bg-green-500 ml-3"
				handleClick={handleClick}
			/>
		</div>
	);
};
export default AddCityWrapper;
