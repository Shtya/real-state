import BookingTextInput from "./BookingTextInput";
import FormActions from "./StepActions";
import StepTitle from "./StepTitle";
import { useTranslations } from 'next-intl';
export default function Step3({ nextStep }: { nextStep: () => void }) {
    const t = useTranslations('bookings.step3');

    return (
        <div className="space-y-12">
            <StepTitle title={t('title')} subtitle={t('subtitle')} />

            {/* Summary Section */}
            <div className="bg-lighter rounded-xl shadow-sm px-6 py-5 max-w-2xl mx-auto space-y-4 text-center">
                <p className="text-lg sm:text-xl font-semibold text-dark">
                    {t('summary.realEstate')}
                </p>
                <p className="text-lg sm:text-xl text-dark">
                    {t('summary.reservation')}
                </p>
                <p className="text-lg sm:text-xl text-dark">
                    {t('summary.total.prefix')}
                    <span className="font-bold text-primary">{t('summary.total.amount')}</span>
                </p>
            </div>

            {/* Payment Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <BookingTextInput
                    label={t('fields.cardNumber.label')}
                    placeholder={t('fields.cardNumber.placeholder')}
                />
                <BookingTextInput
                    label={t('fields.bank.label')}
                    placeholder={t('fields.bank.placeholder')}
                />
                <BookingTextInput
                    label={t('fields.expDate.label')}
                    placeholder={t('fields.expDate.placeholder')}
                />
                <BookingTextInput
                    label={t('fields.cvv.label')}
                    placeholder={t('fields.cvv.placeholder')}
                />
            </div>

            {/* Actions */}
            <FormActions
                confirmLabel={t('confirm')}
                cancelLabel={t('cancel')}
                onConfirm={nextStep}
                onCancel={() => console.log('Booking cancelled')}
            />
        </div>
    );
}
