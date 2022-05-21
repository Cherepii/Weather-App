import { IField } from './WeatherInfo';

export const dataWeather: IField[] = [
	{
		desc: 'Температура',
		extraDesc: '°C',
		path: 'temp',
		isConverting: true,
	},
	{
		desc: 'Ощущается как',
		extraDesc: '°C',
		path: 'feels_like',
		isConverting: true,
	},
	{
		desc: 'Минимальная температура',
		extraDesc: '°C',
		path: 'temp_min',
		isConverting: true,
	},
	{
		desc: 'Максимальлная температура',
		extraDesc: '°C',
		path: 'temp_max',
		isConverting: true,
	},
	{
		desc: 'Облачность',
		extraDesc: '%',
		group: 'clouds',
		path: 'all',
	},
	{
		desc: 'Закат солнца',
		extraDesc: '',
		group: 'sys',
		path: 'sunset',
		isConvertDate: true
	},
	{
		desc: 'Восход солнца',
		extraDesc: '',
		group: 'sys',
		path: 'sunrise',
		isConvertDate: true
	},
	{
		desc: 'Атмосферное давление',
		extraDesc: 'ГПа',
		group: 'main',
		path: 'pressure',
	},
	{
		desc: 'Влажность воздуха',
		extraDesc: '%',
		group: 'main',
		path: 'humidity',
	},
	{
		desc: 'Видимость',
		extraDesc: 'метров',
		path: 'visibility',
	},
	{
		desc: 'Скорость ветра',
		extraDesc: 'м/сек',
		group: 'wind',
		path: 'speed',
	}
];
