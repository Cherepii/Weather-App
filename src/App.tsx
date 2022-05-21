import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import WeatherPage from './pages/WeatherPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="Weather-App/" element={<MainPage />} />
				<Route path="Weather-App/weather" element={<WeatherPage />} />
			</Routes>
		</Router>
	);
};

export default App;
