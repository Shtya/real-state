'use client';

import { useTranslations } from 'next-intl';
import TextInput from '../shared/forms/TextInput';
import SecondaryButton from '../shared/buttons/SecondaryButton';


export default function ForgotPasswordForm() {
    const t = useTranslations('comman.form');

    return (
        <form className="flex flex-col gap-4 md:gap-5">
            <TextInput
                label={t('email.label')}
                placeholder={t('email.placeholder')}
                type="email"
            />

            <SecondaryButton
                onClick={() => { }}
                className="bg-secondary hover:bg-secondary-hover text-white py-2 lg:py-3 w-full"
                disabled={false}
            >
                {t('send')}
            </SecondaryButton>
        </form>
    );
}
