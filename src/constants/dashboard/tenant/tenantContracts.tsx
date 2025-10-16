
import ContractViewer from '@/components/dashboard/ContractViewer';
import SmartTooltip from '@/components/shared/SmartTooltip';
import { TenantContractRow } from '@/types/dashboard/tenant';
import { ContractStatus } from '@/types/global';
import { TableColumnType } from '@/types/table';
import { format } from 'date-fns';
import Image from 'next/image';

export const TenantContractColumns: TableColumnType<TenantContractRow>[] = [
    {
        key: 'property', label: 'Property',
        cell(value) {
            return (
                <div>

                    <div className="flex items-center gap-2 min-w-fit">
                        <Image
                            src={value.imagePath}
                            width={40}
                            height={40}
                            alt={value.name}
                            className="w-[40px] h-[40px] rounded-[8px] shrink-0"
                        />
                        <SmartTooltip
                            value={value.name}
                            maxLength={{
                                xs: 10,  // <640px (mobile)
                                sm: 15,    // ≥640px
                                md: 20,    // ≥768px
                                lg: 30,    // ≥1024px
                                xl: 40     // ≥1280px
                            }}
                            className="text-dark"
                        />
                    </div>

                </div>

            )
        }
    },
    {
        key: 'status', label: 'Status',
        cell(value) {
            const isFree = value as ContractStatus == 'free';
            return (
                <div className='relative'>
                    <div className=''>
                        {isFree ?
                            <div className='bg-[#ECFDF3] text-[#027A48] flex items-center gap-1 rounded-[16px] w-fit px-2'>
                                <div className='w-[6px] h-[6px] bg-[#027A48] rounded-full'></div>
                                <span>Free</span>
                            </div>
                            : <div className='bg-[#ECFDF3] text-[#FF5F57] flex items-center gap-1 rounded-[16px] w-fit px-2'>
                                <div className='w-[6px] h-[6px] bg-[#FF5F57] rounded-full'></div>
                                <span>Reserved</span>
                            </div>
                        }
                    </div>
                </div>
            )
        }
    },
    {
        key: 'startDate',
        label: 'Start Booking',
        cell: (value) => format(new Date(value), 'dd MMM yyyy'),
    },
    {
        key: 'endDate',
        label: 'End Booking',
        cell: (value) => format(new Date(value), 'dd MMM yyyy'),
    },
    {
        key: 'publishedAt',
        label: 'Published',
        cell: (value) => format(new Date(value), 'dd MMM yyyy'),
    },
    {
        key: 'price',
        label: 'Price',
        cell: (value) => `${value.toLocaleString()} $`,
    },
    {
        key: 'contract',
        label: 'Contract',
        cell: (value) => (
            <div>
                <ContractViewer images={value as {
                    src: string;
                    alt?: string;
                }[]} />
            </div>
        ),
    },
    { key: 'location', label: 'Location' },
];


