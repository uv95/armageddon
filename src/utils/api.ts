import axios from 'axios';
import { IAsteroid } from './asteroidType';
import { getCurrentDate } from './getCurrentDate';

const today = getCurrentDate();

const getClosestAsteroidsURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`

const formatDate = (date:string, withTime = false) => {
    const newDate = new Date(date).toLocaleString('ru-RU', {
        month: 'short',
        year: 'numeric',
        day: 'numeric',
    }).split('').filter(el => el!=='.').join('').split(' ').filter(el => el!=='г').join(' ')

    const time = new Date(date).toLocaleString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
    }) 

    return withTime ? newDate + ', ' + time : newDate
}

export const getAsteroids = async () => {
    try {
        const res = await axios.get(getClosestAsteroidsURL)
        const asteroids:IAsteroid[] = Object.values(res.data.near_earth_objects).flat(1).map((item:any) => ({
            name: item.name.slice(item.name.indexOf('(') + 1, -1),
            id: item.id,
            size: Math.ceil((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2),
            approachDate: formatDate(item.close_approach_data[0].epoch_date_close_approach),
            approachDateEpoch: item.close_approach_data[0].epoch_date_close_approach,
            isDangerous: item.is_potentially_hazardous_asteroid,
            distance:  { 
                lunar: Math.ceil(item.close_approach_data[0].miss_distance.lunar),
                kilometers: Math.ceil(item.close_approach_data[0].miss_distance.kilometers)
            }
        }));

        return asteroids.sort((a, b) => a.approachDateEpoch! - b.approachDateEpoch!);
    } catch (error) {
        console.log(error)
    }
};

export const getOneAsteroid = async (id:string) => {
    const getOneAsteroidURL = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    
    try {
        const res = await axios.get(getOneAsteroidURL);

        const asteroid:Partial<IAsteroid> = {
            name: res.data.designation,
            id: res.data.id,
            size: Math.ceil((res.data.estimated_diameter.meters.estimated_diameter_max + res.data.estimated_diameter.meters.estimated_diameter_min) / 2),
            isDangerous: res.data.is_potentially_hazardous_asteroid,
            allApproaches: res.data.close_approach_data.map((approach: any) => (
                {
                    fullDate: formatDate(approach.epoch_date_close_approach, true),
                    velocity: Math.ceil(approach.relative_velocity.kilometers_per_hour),
                    distance: Math.ceil(approach.miss_distance.kilometers),
                    orbitingBody: approach.orbiting_body
                }
            ))
        };
        
        return asteroid;
    } catch (error) {
        console.log(error)
        
    }
}
