import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@components/Layout';
import MetaTag from '@components/MetaTag';
import { baseURL, ImageUrl } from '@components/Common';
import { ApiUrl } from '@api/apiUrl';
import AppContext from '@components/AppContext';

const Thanks = () => {
    const { resConfigData } = useContext(AppContext)
    const pageTitle = "Thank you!"
    const pageDes = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."

    const router = useRouter();

    if (router.isFallback) {
        <h1>Data is loading</h1>;
    }
    return (
        <>
            <MetaTag
                title={pageTitle}
                description={pageDes}
                siteName={resConfigData?.site_name}
            />
            <Layout>
                <div className="thank-you-page min-h-[60vh] flex items-center">
                    <div className='container'>
                        <div className="thank-you-wrap text-center md:text-left max-w-[90vw] md:max-w-[40vw] mx-auto">
                            <h2 className='text-ip-red text-[2.5rem] text-center'>{pageTitle}</h2>
                            <h3 className='text-[1.3rem] mt-[1rem] leading-[1.4] md:leading-[1.7]'>{pageDes}</h3>
                            <Link href="/" className='text-[1.2rem] md:text-[1.5rem] flex justify-center md:justify-start items-center mt-[2.5rem]'>
                                <Image
                                    className='rotate-[180deg]'
                                    loading="lazy"
                                    width={50}
                                    height={30}
                                    objectFit="contain"
                                    alt="Send"
                                    src='/images/contact/contact-arrow.png'
                                />
                                <span className="ml-[1.2rem] md:ml-[1.4rem] text-ip-black">Back to Homepage</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Thanks
