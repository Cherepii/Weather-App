import cn from 'classnames';
import moment from 'moment';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { weatherAPI } from '../../api/weatherAPI';
import { ICity } from '../../models/cityModel';
import Button from '../button/Button';

import styles from './SingleWeather.module.scss';
import SingleWeatherInfo from './SingleWeatherInfo';

interface IProps {
	city: string;
	idx: number;
	removeCity: (idx: number) => void;
}

type IField =
	| 'feels_like'
	| 'temp'
	| 'temp_min'
	| 'temp_max'
	| 'pressure'
	| 'humidity';

const SingleWeather: FC<IProps> = ({ city, idx, removeCity }) => {
	const navigate = useNavigate();

	const {
		data: weather,
		isFetching,
		isLoading,
		refetch,
	} = weatherAPI.useFetchWeatherQuery(city);

	const convertUnixToDate = moment
		.unix(weather ? weather.dt : 111)
		.format('Do MMMM YYYY');

	const convertKelvinToCelsius = (field: IField) => {
		return Math.floor((weather ? weather.main[`${field}`] : 123) - 273.15);
	};

	if (isFetching || isLoading) return <span>Loading...</span>;

	if (!weather) {
		return (
			<div className={styles.weather}>
				<span>Данные о погоде не найдены...</span>
				<div className={styles.buttonBlock}>
					<Button text='Удалить' handleClick={() => removeCity(idx)} extraClass='mx-auto bg-red-400'/>
				</div>
			</div>
		);
	}

	return (
		<div
			className={cn(styles.weather, {
				[styles.blue]: convertKelvinToCelsius('temp') <= 17,
				[styles.orange]:
					convertKelvinToCelsius('temp') > 17 &&
					convertKelvinToCelsius('temp') < 25,
				[styles.red]: convertKelvinToCelsius('temp') >= 25,
			})}
		>
			<div className={styles.content}>
				<div className={styles.generals}>
					<h1
						onClick={() =>
							navigate(
								`weather?q=${weather.name}`
							)
						}
					>
						{weather.name}
					</h1>
					<span>{weather.weather[0].description}</span>
				</div>
				<div className={styles.main}>
					<h4>{convertUnixToDate}</h4>

					<SingleWeatherInfo
						desc="Температура"
						extraDesc="°C"
						value={convertKelvinToCelsius('temp')}
					/>
					<SingleWeatherInfo
						desc="Ощущается как"
						extraDesc="°C"
						value={convertKelvinToCelsius('feels_like')}
					/>
					<SingleWeatherInfo
						desc="Скорость ветра"
						extraDesc="m/s"
						value={weather.wind.speed}
					/>
					<div className={styles.buttonBlock}>
						<Button
							text="Обновить"
							handleClick={() => refetch()}
							extraClass="bg-orange-400 mx-auto"
						/>
						<Button
							text="Удалить"
							handleClick={() => removeCity(idx)}
							extraClass="bg-red-400 mx-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleWeather;
