import BookingTextInput from "./BookingTextInput";
import FormActions from "./StepActions";
import StepTitle from "./StepTitle";
import { useTranslations } from 'next-intl';

export default function Step2({ nextStep }: { nextStep: () => void }) {
    const t = useTranslations('bookings.step2');

    return (
        <div className="space-y-12">
            <StepTitle title={t('title')} subtitle={t('subtitle')} />

            <div className="space-y-6">
                <h1 className="text-dark font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-[100%] tracking-normal">
                    {t('sectionTitle')}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    <BookingTextInput label={t('fields.fullName.label')} placeholder={t('fields.fullName.placeholder')} />
                    <BookingTextInput label={t('fields.phone.label')} placeholder={t('fields.phone.placeholder')} />
                    <BookingTextInput label={t('fields.nationalId.label')} placeholder={t('fields.nationalId.placeholder')} />
                    <BookingTextInput label={t('fields.billingAddress.label')} placeholder={t('fields.billingAddress.placeholder')} />
                    <BookingTextInput label={t('fields.address.label')} placeholder={t('fields.address.placeholder')} />
                    <BookingTextInput label={t('fields.email.label')} placeholder={t('fields.email.placeholder')} />
                </div>
            </div>

            <FormActions
                confirmLabel={t('confirm')}
                cancelLabel={t('cancel')}
                onConfirm={nextStep}
                onCancel={() => console.log('Booking cancelled')}
            />
        </div>
    );
}
