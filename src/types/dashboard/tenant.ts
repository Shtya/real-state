

export type TenantContractRow = {
    name: string;
    status: 'Free' | 'Reserved';
    startDate: Date;
    endDate: Date;
    publishedAt: Date;
    price: number;
    location: string;
    contractId: string;
};
