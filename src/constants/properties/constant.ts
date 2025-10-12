
export const locationValues = [
    'all',
    'cairo',
    'alexandria',
    'giza'
] as const;

export const subtypeValues = {
    residential: ['condo', 'multiFamily', 'townhomes', 'singleFamily'],
    commercial: ['office', 'retail', 'warehouse', 'industrial']
} as const;

export const bedroomValues = [
    'any',
    '1',
    '2',
    '3',
    '4',
    'fiveAndMore'
] as const;

export const bathroomValues = [
    'any',
    '1_0',
    '1_5',
    '2_0',
    '2_5',
    'threeAndMore'
] as const;


export const featurevalues = [
    'airConditioning',
    'assistedLiving',
    'disabilityAccess',
    'controlledAccess',
    'cableReady',
    'availableNow',
    'college',
    'corporate',
    'elevator',
    'extraStorage',
    'highSpeedInternet',
    'garage',
    'petAllowed'
];


export const periodValues: PeriodType[] = [
    'yearly',
    'monthly'
] as const;

export const propertyTypeValues: PropertyType[] = [
    'residential',
    'commercial'
] as const;

export const furnishedValues: FurnishedType[] = [
    'furnished',
    'unfurnished'
] as const;

export type PeriodType = "monthly" | "yearly";
export type PropertyType = "residential" | "commercial";
export type FurnishedType = "furnished" | "unfurnished";

export const MIN_PRICE = 1000;
export const MAX_PRICE = 100_000;

export const MIN_SCQUAREFEET = 10;
export const MAX_SCQUAREFEET = 1500;

export const MIN_YEARBUILD = 1950;
export const MAX_YEARBUILD = 2025;

export type FilterState = {
    location: string;
    period: "monthly" | "yearly";
    type: "residential" | "commercial";
    subtype: string[];
    furnished: "furnished" | "unfurnished";
    bathroom: string;
    bedroom: string;
    features: string[];
    priceMin: number;
    priceMax: number;
    scquarefeetMin: number;
    scquarefeetMax: number;
    yearBuiltMin: number;
    yearBuiltMax: number;
};
