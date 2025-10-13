import PropertyDetails from '@/components/main/properties/PropertyDetails/PropertyDetails';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const locale = await getLocale();

    const title = locale === 'ar' ? 'منزل عائلي فاخر' : 'Luxury Family Home';

    return {
        title,
    };
}

export default async function PropertyPage({ params }: { params: { propertyId: string } }) {
    const locale = await getLocale();
    const t = await getTranslations('property.details');

    const property = {
        title: locale === 'ar' ? 'منزل عائلي فاخر' : 'Luxury Family Home',
        price: {
            amount: 13000,
            isMonthly: true
        },
        address: locale === 'ar'
            ? '166 شارع ويلينج، كولينجوود، فيكتوريا 3066'
            : '166 Welling Street, Collingwood, VIC 3066',
        userImage: '/users/user-2.jpg',
        images: [
            { imagePath: '/properties/location/property-1.jpg', isPrimary: true },
            { imagePath: '/properties/location/property-2.jpg' },
            { imagePath: '/properties/location/property-3.jpg' },
            { imagePath: '/properties/location/property-4.jpg' },
            { imagePath: '/properties/location/property-5.jpg' },
            { imagePath: '/properties/location/property-6.jpg' },
        ],
        description: locale === 'ar'
            ? [
                'برج إيفانز، زاوية مطلوبة بشدة، غرفة نوم صغيرة مع شرفة كبيرة تطل على مناظر نيويورك المفتوحة بالكامل. يجب أن ترى المناظر لتصدقها. حالة ممتازة مع أرضيات خشبية جديدة. الكثير من الخزائن بالإضافة إلى غسالة ومجفف.',
                'مفروشة بالكامل. وحدة سكنية أنيقة تقع في موقع متميز. PS6. يؤدي المدخل الواسع إلى غرفة معيشة كبيرة مع منطقة لتناول الطعام. تحتوي هذه الشقة الواسعة على غرفتي نوم وحمامين من الرخام المجددين، وتتميز بنوافذ رائعة. على الرغم من الإطلالات الداخلية، فإن التعرض الجنوبي والشرقي للشقة يسمح بدخول الضوء الطبيعي الجميل إلى كل غرفة. الجناح الرئيسي محاط بأعمال خشبية مصنوعة يدويًا ويتميز بخزانة ملابس ومساحة تخزين مذهلة.'
            ]
            : [
                'Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.',
                'Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartment’s Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.'
            ],
        additionalDetails: locale === 'ar'
            ? [
                'هذا المنزل العائلي الكامل، الذي تم بناؤه في 3 ديسمبر 2021، يحتوي على 4 غرف نوم و2 حمام على مساحة 720 قدم مربع. يشمل المنزل مرآبًا يتسع لسيارتين بمساحة 558 قدم مربع. مدرج حاليًا للإيجار، ويبلغ سعره 500,000 دولار ومعرف العقار ST612.'
            ]
            : [
                'This full family home, built on December 3, 2021, offers 4 bedrooms and 2 bathrooms across a 720 sq ft property. The house includes a 2-car garage with a spacious size of 558 sq ft. Currently listed for rent, this property is priced at $500,000 and is identified by the property ID ST612.'
            ],
        details: [
            { label: locale === 'ar' ? 'السعر' : 'Price', value: '$484,400' },
            { label: locale === 'ar' ? 'موقف سيارات' : 'Parking', value: '1' },
            { label: locale === 'ar' ? 'حجم العقار' : 'Property Size', value: locale === 'ar' ? '1466 قدم مربع' : '1466 Sq Ft' },
            { label: locale === 'ar' ? 'المطبخ' : 'Kitchen', value: '2' },
            { label: locale === 'ar' ? 'غرف النوم' : 'Bedrooms', value: '4' },
            { label: locale === 'ar' ? 'سنة البناء' : 'Year Built', value: '2019-01-09' },
            { label: locale === 'ar' ? 'الحمامات' : 'Bathrooms', value: '2' },
            { label: locale === 'ar' ? 'نوع العقار' : 'Property Type', value: locale === 'ar' ? 'منزل عائلي كامل' : 'Full Family Home' },
            { label: locale === 'ar' ? 'حالة العقار' : 'Property Status', value: locale === 'ar' ? 'للإيجار' : 'For rent' },
        ],
        features: locale === 'ar'
            ? [
                'تكييف هواء',
                'سينما منزلية',
                'حمام سباحة',
                'صالة ألعاب رياضية',
                'غرفة ألعاب',
                'تدفئة مركزية',
                'إنذار',
                'حديقة خاصة',
                'منتجع ومساج',
                'ستائر نوافذ',
                'صالة على السطح',
                'مسموح بالحيوانات الأليفة',
                'واي فاي مجاني',
                'موقف سيارات'
            ]
            : [
                'Air Conditioning',
                'Home Theatre',
                'Swimming Pool',
                'Gym',
                'Game Room',
                'Central Heating',
                'Alarm',
                'Private Garden',
                'Spa & Massage',
                'Window Covering',
                'Rooftop Lounge',
                'Pets Allow',
                'Free Wi-Fi',
                'Car Parking'
            ],
        location: {
            lat: 24.7136,
            lng: 46.6753,
        },
        nearby: {
            education: [
                { name: locale === 'ar' ? 'أطفال إلاديا' : "Eladia's Kids", distance: '2.5 km' },
                { name: locale === 'ar' ? 'أكاديمية بروكلين' : 'Brooklyn Brainery', distance: '3.5 km' },
                { name: locale === 'ar' ? 'مدرسة ويكدوم الثانوية' : 'Wikdom Senior High School' }
            ],
            health: [
                { name: locale === 'ar' ? 'مركز بروكلين الصحي' : 'Brooklyn Health Center', distance: '2.5 km' },
                { name: locale === 'ar' ? 'مستشفى كينغز كاونتي' : 'Kings County Hospital Center', distance: '3.5 km' },
                { name: locale === 'ar' ? 'مركز وودهول الطبي والصحي النفسي' : 'Woodhull Medical and Mental Health Center' }
            ]
        }
    };

    return (
        <div>
            <PageHeroSection
                title={property.title}
                description={property.address}
                buttonText={t('seeMore')}
            />
            <PropertyDetails property={property} />
        </div>
    );
}
