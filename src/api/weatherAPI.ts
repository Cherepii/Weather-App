import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IWeather } from './../models/weatherModel';

const appId = '1883ddb94da1e726fae8fcc262190207';

export const weatherAPI = createApi({
	reducerPath: 'fetch weather',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.openweathermap.org',
	}),
	endpoints: (build) => ({
		fetchWeather: build.query<IWeather, string>({
			query: (q, appid = appId) => ({
				url: '/data/2.5/weather',
				params: {
					q,
					appid,
				},
			}),
		})
	}),
});
