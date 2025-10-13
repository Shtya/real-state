'use client';

import dynamic from 'next/dynamic';
import PropertySectionHeader from './PropertySectionHeader';

const LocationMap = dynamic(() => import('../../../shared/LocationMap'), {
    ssr: false,
});



export default function PropertyLocationSection({ lat, lng }: {
    lat: number;
    lng: number;
}) {
    return <div>
        <PropertySectionHeader title="Location" align="end" />
        <LocationMap lat={lat} lng={lng} />
    </div>
}