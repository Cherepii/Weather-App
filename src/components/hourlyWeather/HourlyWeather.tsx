import moment from 'moment';
import { FC } from 'react';

import { weatherAPI } from '../../api/weatherAPI';
import { IWeather } from '../../models/weatherModel';

import styles from './Hourly.module.scss';
import HourlyItem from './HourlyItem';

const HourlyWeather: FC<{ weather: IWeather }> = ({ weather }) => {
	const { data, isFetching, isLoading } = weatherAPI.useFetchWeatherHourlyQuery(
		{ lat: weather.coord.lat, lon: weather.coord.lon }
	);

	if (isFetching || isLoading) return <h1>loading...</h1>;

	if (!data) return <h1>Не удалось получить данные о часовой погоде...</h1>;

	return (
		<div className={styles.hourlyBlock}>
			{data.hourly.map((el, idx) => {
				return idx < 9 ? <HourlyItem key={idx} hourly={el} /> : null;
			})}
		</div>
	);
};
export default HourlyWeather;
