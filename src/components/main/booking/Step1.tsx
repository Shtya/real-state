import PlanCard from "./PlanCard";
import FormActions from "./StepActions";
import StepTitle from "./StepTitle";
import DateRangePicker from "@/components/shared/forms/SelectDateRange";
import { useTranslations } from 'next-intl';

export default function Step1({ nextStep }: { nextStep: () => void }) {
    const t = useTranslations('bookings.step1');

    return (
        <div className="flex-1  flex flex-col justify-between gap-y-6">
            <div className="space-y-6">
                <StepTitle title={t('title')} subtitle={t('subtitle')} />

                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    <PlanCard
                        title={t('plans.business.title')}
                        price={t('plans.business.price')}
                        description={t('plans.business.description')}
                        buttonText={t('plans.business.button')}
                    />
                    <PlanCard
                        title={t('plans.professional.title')}
                        price={t('plans.professional.price')}
                        description={t('plans.professional.description')}
                        buttonText={t('plans.professional.button')}
                    />
                </div>

                <div className="flex-center">
                    <div className="w-fit space-y-3">
                        <p className="text-input">{t('pickDate')}</p>
                        <DateRangePicker />
                    </div>
                </div>

                <div className="text-[24px] leading-[170%] mx-auto text-center text-primary">
                    <span className="font-light">{t('payment.prefix')}</span>
                    <span className="font-medium"> 400$</span>
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
