export interface IWeatherAPIResponse {
  currentConditions: ICurrentConditions;
  name: string;
}

export interface ICurrentConditions {
  temp: number;
  visibility: number;
  humidity: number;
}
