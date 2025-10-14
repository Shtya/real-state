
import Booking from "@/components/main/booking/Booking";
import { getTranslations } from "next-intl/server";


export async function generateMetadata() {
    const t = await getTranslations('bookings');
    return {
        title: t('title'),
    };
}
export default function BookingPage() {
    return <Booking />;
}