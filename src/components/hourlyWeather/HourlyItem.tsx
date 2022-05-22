import cn from 'classnames';
import moment from 'moment';
import { FC } from 'react';

import { IHourly } from '../../models/weatherModel';

import styles from './Hourly.module.scss';

interface IProps {
	hourly: IHourly;
}

const HourlyItem: FC<IProps> = ({ hourly }) => {
	const { dt, temp } = hourly;

	const convertKelvin = Math.floor(temp - 273.15);

	return (
		<div className={styles.hourlyItem}>
			<div
				className={cn({
					[styles.light]: convertKelvin <= 12,
					[styles.middle]: convertKelvin > 12 && convertKelvin < 24,
					[styles.hot]: convertKelvin >= 24,
				})}
				style={{ marginBottom: `${2 + convertKelvin}px` }}
			>
				{convertKelvin > 0 ? '+' : '-'}
				{convertKelvin}
			</div>
			<div>{moment.unix(dt).format('HH:mm')}</div>
		</div>
	);
};
export default HourlyItem;
