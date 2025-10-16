import { ContractStatus } from "../global";



export type TenantContractRow = {
    id: string;
    property: {
        imagePath: string;
        name: string;
    }
    status: ContractStatus;
    startDate: Date;
    endDate: Date;
    publishedAt: Date;
    price: number;
    contract: {
        src: string;
        alt?: string;
    }[];


    location: string;
};
