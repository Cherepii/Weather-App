import { useSearchParams } from 'react-router-dom';

import { weatherAPI } from '../api/weatherAPI';
import Layout from '../components/layout/Layout';
import WeatherInfo from '../components/weatherInfo/WeatherInfo';

const WeatherPage = () => {
	const [params] = useSearchParams();

	const city = params.get('q');

	const { data, isFetching, isLoading } = weatherAPI.useFetchWeatherQuery(
		city ? city : ''
	);

	if (isLoading || isFetching) return <h1>Loading...</h1>;

	if (!data) return <h1>Данные о погоде не найдены...</h1>;

	return (
		<Layout title={`Данные о погоде для города ${data.name}`}>
			<WeatherInfo weather={data} />
		</Layout>
	);
};
export default WeatherPage;
