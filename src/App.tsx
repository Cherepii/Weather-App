import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import WeatherPage from './pages/WeatherPage';

const App = () => {
	return (
		<Router basename='Weather-App'>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/weather" element={<WeatherPage />} />
			</Routes>
		</Router>
	);
};

export default App;
