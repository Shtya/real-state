'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from './Pagination';
import { updateUrlParams } from '@/utils/helpers';

interface PaginationControllerProps {
    pageCount: number;
}

export default function TablePagination({ pageCount }: PaginationControllerProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const currentPage = Number(searchParams.get('page')) || 1;

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        updateUrlParams(pathname, params);
    };

    return (
        <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
        />
    );
}
