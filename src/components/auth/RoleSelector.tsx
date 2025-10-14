'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaUser } from 'react-icons/fa';
import { PiHouseLine } from 'react-icons/pi';
import RoleOption from './RoleOption';

export default function RoleSelector() {
    const [selectedRole, setSelectedRole] = useState<'Tenant' | 'Landlord'>('Tenant');
    const t = useTranslations('auth.roleSelector');

    return (
        <div className="flex gap-4 md:gap-6 flex-col md:flex-row justify-center">
            <RoleOption
                title={t('tenant.title')}
                description={t('tenant.description')}
                selected={selectedRole === 'Tenant'}
                onClick={() => setSelectedRole('Tenant')}
                icon={<FaUser size={24} />}
            />
            <RoleOption
                title={t('landlord.title')}
                description={t('landlord.description')}
                selected={selectedRole === 'Landlord'}
                onClick={() => setSelectedRole('Landlord')}
                icon={<PiHouseLine size={26} />}
            />
        </div>
    );
}
