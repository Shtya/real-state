import PropertyDetails from "@/components/main/properties/PropertyDetails/PropertyDetails";
import PageHeroSection from "@/components/shared/PageHeroSection";


const property = {
    id: "FhDk56g0Z2C",
    name: "Luxury Family Home",
    description: "From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom."
}
export default async function PropertyPage({ params }: { params: { propertyId: string } }) {
    const { propertyId } = await params;

    return (
        <div>
            <PageHeroSection
                title={property.name}
                description={property.description}
                buttonText={"See More"}
            />
            <PropertyDetails />
        </div>
    );
}