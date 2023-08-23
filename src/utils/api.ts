import axios from 'axios';
import { getCurrentDate } from './getCurrentDate';

export enum DistanceUnit {
    LUNAR = 'lunar',
    KM = 'kilometers'
}

export interface IDistanceUnit {
   [DistanceUnit.LUNAR]: number,
   [DistanceUnit.KM]: number
}

export interface IAsteroid {
        name: string;
        id: string;
        size: number;
        approachDate: string;
        approachDateEpoch: number;
        isDangerous: Boolean;
        distance: IDistanceUnit
}

const today = getCurrentDate();

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`

const formatDate = (date:string) => new Date(date).toLocaleString('ru-RU', {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
}).slice(0, -9) + ' ' + date.slice(0, 4)

export const getAsteroids = async () => {
    try {
        const res = await axios.get(url)
        const asteroids:IAsteroid[] = Object.values(res.data.near_earth_objects).flat(1).map((item:any) => ({
            name: item.name.slice(item.name.indexOf('(') + 1, -1),
            id: item.id,
            size: Math.ceil((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2),
            approachDate: formatDate(item.close_approach_data[0].close_approach_date),
            approachDateEpoch: item.close_approach_data[0].epoch_date_close_approach,
            isDangerous: item.is_potentially_hazardous_asteroid,
            distance:  { 
                lunar: Math.ceil(item.close_approach_data[0].miss_distance.lunar),
                kilometers: Math.ceil(item.close_approach_data[0].miss_distance.kilometers)
            }
        }));

        return asteroids.sort((a, b) => a.approachDateEpoch - b.approachDateEpoch);
    } catch (error) {
        console.log(error)
    }
};
