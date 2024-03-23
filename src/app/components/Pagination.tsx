"use client"

import React from 'react'
import {usePathname } from "next/navigation";
import Link from 'next/link';
import { pagination } from '../Schema';

const Pagination = ({pagination}: {pagination: pagination}) => {

    const totalPages = pagination.pageCount;
    const currPage = pagination.page
    const pathName = usePathname();

    const control1 = currPage > 5 ? currPage - 5 : 1;
    const control2 = currPage > 5 ? currPage - 4 : 2;
    const control3 = currPage > 5 ? currPage - 3 : 3;
    const control4 = currPage > 5 ? currPage - 2 : 4;
    const control5 = currPage > 5 ? currPage - 1 : 5;
    const control6 = currPage > 5 ? currPage : 6;
    const nextPage = currPage == totalPages ? null : currPage+1;
    const prePage = currPage == 1 ? null : currPage-1;


    return (
        <ul className='flex flex-row justify-center items-center student-pagination absolute bottom-2'>
            {prePage && (
                <>
                    <Link href={`${pathName}`}>
                        <li className={`control-box control-first-last`}  
                        >
                            &lt;&lt;
                        </li>
                    </Link>
                    <Link href={`${pathName}?page=${prePage}`}>
                        <li className={'control-box control-next-pre'}>&lt;</li>
                    </Link>
                </>
            )}
            {totalPages >= control1 && (
                <Link href={`${pathName}?page=${control1}`}>
                    <li className={`control-box control-number ${currPage === control1 ? 'active' : ''}`}>{control1}</li>
                </Link>
            )}
            {totalPages >= control2 && (
                <Link href={`${pathName}?page=${control2}`}>
                    <li className={`control-box control-number ${currPage === control2 ? 'active' : ''}`}>{control2}</li>
                </Link>
            )}
            {totalPages >= control3 && (
                <Link href={`${pathName}?page=${control3}`}>
                    <li className={`control-box control-number ${currPage === control3 ? 'active' : ''}`}>{control3}</li>
                </Link>
            )}
            {totalPages >= control4 && (
                <Link href={`${pathName}?page=${control4}`}>
                    <li className={`control-box control-number ${currPage === control4 ? 'active' : ''}`}>{control4}</li>
                </Link>
            )}
            {totalPages >= control5 && (
                <Link href={`${pathName}?page=${control5}`}>
                    <li className={`control-box control-number ${currPage === control5 ? 'active' : ''}`}>{control5}</li>
                </Link>
            )}
            {totalPages >= control6 && (
                <Link href={`${pathName}?page=${control6}`}>
                    <li className={`control-box control-number ${currPage === control6 ? 'active' : ''}`}>{control6}</li>
                </Link>
            )}
            {totalPages > control6 && (
                <>
                    {totalPages >= control6+1 && (
                        <Link href={`${pathName}?page=${control6+1}`}>
                            <li className={`control-box control-number`}>.</li>
                        </Link>
                    )}
                    {totalPages >= control6+2 && (
                        <Link href={`${pathName}?page=${control6+2}`}>
                            <li className={`control-box control-number`}>.</li>
                        </Link>
                    )}
                </>
            )}
            {nextPage && (
                <>
                    <Link href={`${pathName}?page=${nextPage}`}>
                        <li className='control-box control-next-pre'>&gt;</li>
                    </Link>
                    <Link href={`${pathName}?page=${totalPages}`}>
                        <li className='control-box control-first-last'>&gt;&gt;</li>
                    </Link>
                </>
            )}
        </ul>
    )
}

export default Pagination
