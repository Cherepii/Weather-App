import { useState } from 'react';

import AddCityWrapper from '../components/addCityWrapper/AddCityWrapper';
import Input from '../components/input/Input';
import Layout from '../components/layout/Layout';
import WeatherList from '../components/weatherList/WeatherList';
import { defaultCities } from '../components/weatherList/cities.data';

const MainPage = () => {
	const getCities = JSON.parse(localStorage.getItem('cities') || '');
	const [cities, setCities] = useState(getCities);
	const [value, setValue] = useState('');

	const removeCity = (idx: number) => {
		const updatedCities = cities.filter((el: string, i: number) => i !== idx);
		localStorage.setItem('cities', JSON.stringify(updatedCities));
		setCities(updatedCities);
	};

	const setDefaultCities = () => {
		localStorage.setItem('cities', JSON.stringify(defaultCities));
		setCities(defaultCities);
	};

	const addCityToList = (newValue: string) => {
		const updatedList = [...cities, newValue]
		setCities(updatedList)
		localStorage.setItem('cities', JSON.stringify(updatedList))
		setValue('')
	}

	return (
		<Layout title="Простое приложение, которое покажет текущую погоду для вас!">
			<AddCityWrapper
				handleClick={() => addCityToList(value)}
				setValue={(e) => setValue(e.target.value)}
				value={value}
			/>
			<WeatherList
				setDefaultCities={() => setDefaultCities()}
				cities={cities}
				removeCity={removeCity}
			/>
		</Layout>
	);
};
export default MainPage;
