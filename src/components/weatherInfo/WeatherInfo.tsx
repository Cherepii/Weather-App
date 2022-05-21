import moment from 'moment';
import { FC } from 'react';

import { IWeather } from '../../models/weatherModel';
import SingleWeatherInfo from '../singleWeather/SingleWeatherInfo';

import styles from './WeatherInfo.module.scss';
import { FieldsType, GroupFieldsType } from './types';
import { dataWeather } from './weather.data';

export interface IField {
	desc: string;
	extraDesc: string;
	path?: FieldsType;
	group?: GroupFieldsType;
	isConverting?: boolean;
	isConvertDate?: boolean;
}

const WeatherInfo: FC<{ weather: IWeather }> = ({ weather }) => {
	const convertKelvinToCelsius = (field: FieldsType) => {
		return Math.floor(weather.main[field] - 273.15);
	};

	const convertUnixToDate = (field?: FieldsType, group?: GroupFieldsType) => {
		return group && field
			? moment.unix(weather[group][field]).format('kk:mm')
			: moment.unix(weather.dt).format('Do MMMM YYYY');
	};

	const setValue = (el: IField) => {
		if (el.isConverting && el.path) {
			return convertKelvinToCelsius(el.path);
		}

		if (el.isConvertDate && el.path && el.group) {
			return convertUnixToDate(el.path, el.group);
		}

		if (el.group && el.path) {
			return weather[el.group][el.path];
		}

		return weather[el.path !== undefined ? el.path : 'name'];
	};

	return (
		<div className={styles.weather}>
			<h1>
				{convertUnixToDate()} <span>({weather.weather[0].description})</span>
			</h1>
			{dataWeather.map((el: IField, idx) => {
				return (
					<div key={idx}>
						<SingleWeatherInfo
							value={setValue(el)}
							desc={el.desc}
							extraDesc={el.extraDesc}
						/>
					</div>
				);
			})}
		</div>
	);
};
export default WeatherInfo;
