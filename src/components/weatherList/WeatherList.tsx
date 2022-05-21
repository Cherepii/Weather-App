import cn from 'classnames';
import { FC } from 'react';

import SingleWeather from '../singleWeather/SingleWeather';

import styles from './WeatherList.module.scss';

interface IProps {
	cities: Array<string>;
	removeCity: (idx: number) => void;
	setDefaultCities: () => void;
}

const WeatherList: FC<IProps> = ({ cities, removeCity, setDefaultCities }) => {
	return (
		<div
			className={cn(styles.weather, {
				[styles.isAlone]: cities.length === 0,
			})}
		>
			{cities.length ? (
				cities.map((el, idx) => (
					<SingleWeather
						key={idx}
						idx={idx}
						removeCity={removeCity}
						city={el}
					/>
				))
			) : (
				<h2 className={styles.defaultButton} onClick={() => setDefaultCities()}>
					Установить города по умолчанию ?
				</h2>
			)}
		</div>
	);
};
export default WeatherList;
