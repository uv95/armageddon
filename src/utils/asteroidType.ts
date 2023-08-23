export enum DistanceUnit {
    LUNAR = 'lunar',
    KM = 'kilometers'
}

export interface IDistanceUnit {
   [DistanceUnit.LUNAR]: number,
   [DistanceUnit.KM]: number
}

export interface IApproach {
    fullDate: string;
    velocity: number;
    distance: number;
    orbitingBody: string
}

export interface IAsteroid {
        name: string;
        id: string;
        size: number;
        approachDate?: string;
        approachDateEpoch?: number;
        isDangerous: Boolean;
        distance: IDistanceUnit;
        allApproaches?: IApproach[];

}