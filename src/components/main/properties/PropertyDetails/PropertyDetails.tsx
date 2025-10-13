import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import ImageGallery from "@/components/shared/ImageGallery";
import PropertyDescription from "./PropertyDescription";
import PropertyDetailsSection from "./PropertyDetailsSection";
import PropertyFeaturesSection from "./PropertyFeaturesSection";
import PropertyLocationSection from "./PropertyLocationSection";
import PropertyNearbySection from "./PropertyNearbySection";
import { LiaBuilding } from "react-icons/lia";
import { GiMilitaryAmbulance } from "react-icons/gi";

const imageList = [
    { imagePath: '/properties/location/property-1.jpg', isPrimary: true },
    { imagePath: '/properties/location/property-2.jpg' },
    { imagePath: '/properties/location/property-3.jpg' },
    { imagePath: '/properties/location/property-4.jpg' },
    { imagePath: '/properties/location/property-5.jpg' },
    { imagePath: '/properties/location/property-6.jpg' },
];


export default function PropertyDetails() {
    return (
        <div className="my-20 px-2">
            <div className="container">
                <div>
                    {/* Header: Title + Price */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-center sm:text-left">
                        <p className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold">
                            <span>$13,000</span>
                            <span className="mx-1 ">/</span>
                            <span className="">mo</span>
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold text-dark">
                            Luxury Family Home
                        </h1>
                    </div>

                    {/* Booking + Address */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6 text-center sm:text-left">
                        <PrimaryButton className="bg-secondary hover:bg-secondary-hover text-white !rounded-[12px] shadow-[0px_4px_12px_0px_#0000001F] lg:!py-3 w-full sm:w-auto">
                            Booking Now
                        </PrimaryButton>
                        <p className="text-lg sm:text-xl text-dark">
                            166 Welling Street, Collingwood, VIC 3066
                        </p>
                    </div>
                </div>

                <ImageGallery images={imageList}
                    userImage="/users/user-2.jpg"
                    price="$13,000/mo"
                    title="Luxury Family Home"
                />
                <div className="space-y-4">
                    <PropertyDescription title="Description">
                        <p>
                            Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views.
                            You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.
                        </p>
                        <p>
                            Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area.
                            This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartment’s Southern and Eastern exposures
                            allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
                        </p>
                    </PropertyDescription>

                    <PropertyDetailsSection />
                    <PropertyFeaturesSection />
                    <PropertyDescription title="Additional Details  ">
                        <p>
                            This full family home, built on December 3, 2021, offers 4 bedrooms and 2 bathrooms across a 720 sq ft property. The house includes a 2-car garage with a spacious size of 558 sq ft. Currently listed for rent, this property is priced at $500,000 and is identified by the property ID ST612.
                        </p>
                    </PropertyDescription>
                    <PropertyLocationSection lat={24.7136} lng={46.6753} />
                    <PropertyNearbySection title="Education" icon={<LiaBuilding />} items={[
                        { name: "Eladia's Kids", distance: "2.5 km" },
                        { name: 'Brooklyn Brainery', distance: '3.5 km' },
                        { name: 'Wikdom Senior High School' },
                    ]} />

                    <PropertyNearbySection title="Health & Medical" icon={<GiMilitaryAmbulance />} items={[
                        { name: "Brooklyn Health Center", distance: "2.5 km" },
                        { name: 'Kings County Hospital Center', distance: '3.5 km' },
                        { name: 'Woodhull Medical and Mental Health Center' },
                    ]} />
                </div>

            </div>
        </div >
    );
}