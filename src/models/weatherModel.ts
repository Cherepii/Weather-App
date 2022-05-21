// географическое положение города 
export interface ICoord {
  lon: number, // долгота
  lat: number // широта
}

export interface ISingleWeather {
  id: number,
  main: string,
  description: string
}

// главная информация о погоде
export interface IMain {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
}

// информация о ветре
interface IWind {
  speed: number,
  deg: number
}

export interface ISys {
  sunrise: number,
  sunset: number
}

export interface IRain {
  '1h': number,
  '3h': number,
}

export interface IWeather {
  coord: ICoord,
  weather: ISingleWeather[],
  main: IMain,
  wind: IWind,
  rain: IRain,
  clouds: {
    all: number
  }
  name: string,
  dt: number,
  visibility: number,
  id: number,
  sys: ISys
}