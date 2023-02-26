import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useEffect, useState, useRef, useContext } from 'react';

import { baseURL, ImageUrl, handleError, imgPlaceHolder, mappingMediaWorks, ImgQuality, DataCommonFromApi } from '@components/Common';
import { JsonWorks } from '@fakes/index';
import { ApiUrl, ApiUrlProjectDetail } from '@api/apiUrl';

import api from 'api/axiosServices';
// import Layout from '@components/Layout';
import Heading from '@components/Heading';
import Link from 'next/link';
import ImagePlaceholder from '@components/ImagePlaceholder';
import MetaTag from '@components/MetaTag';
import AppContext from '@components/AppContext';
import useLazyLoadImage from '@components/useLazyLoadImage';
import useUser from './../../components/HookCallConfig';
import Head from 'next/head';

//bg-[green]
const Works = ({ stars }) => {
    // const x= props.stars
    const x = stars

    const [config, setConfig] = useState(stars)

    const { resConfigData } = useContext(AppContext)
    const [resData, setResData] = useState()
    const [listMedia, setListMedia] = useState()

    const pageTitle = "All Works"
    const pageDes = "Experiences designed to explore the world and collections of our brands"

    const refWorks = useRef(null);
    useLazyLoadImage(refWorks);

    // const xxx = useUser();
    // console.log({xxx});

    const CallApi = async () => {
        try {
            await api.get(baseURL + ApiUrl.works)
                .then(data => {
                    if (data.status === 200) {
                        setResData(data.data.data)
                    }
                })
        } catch (error) {
            handleError(error)
        }
    }

    useEffect(() => {
        CallApi()
    }, [])

    useEffect(() => {
        console.log(stars);
    }, [config])

    useEffect(() => {
        if (resData) {
            let listProjectClone = [].concat(resData);
            for (let i = 0; i < listProjectClone.length; i++) {
                if (listProjectClone[i].work_photo != null) {
                    mappingMediaWorks(listProjectClone[i])
                }
            }
            setListMedia(listProjectClone)
        }
    }, [resData])



    return (
        <>
            {/* <MetaTag
                title={pageTitle}
                metaTitle={config?.meta_title}
                metaDescription={config?.meta_description}
                siteName={resConfigData?.site_name}
            /> */}

            <Head>
                <title>xxxx</title>
                <meta name="robots" content="follow, index" />
                <meta property="og:url" content={'url'} />
                <meta name="keywords" content='test' />
                <meta property="og:type" content="website" />
                <meta name="description" content={config?.meta_description} />
                <meta property="og:title" content={config?.meta_title} />
                <meta property="og:description" content={config?.meta_description} />
                {/* <meta property="og:image" content={'https://cms.ipossible.com.sg/assets/' + post?.work_photo?.id} /> */}
                
                <meta
                    name="robots"
                    content={
                        process.env.NODE_ENV === "production"
                            ? "index, follow"
                            : "noindex, nofollow"
                    } />
            </Head>
            {/* <Layout> */}
            <Heading title={pageTitle} sub={pageDes} />
            <div className="works-page">
                <div className='container'>
                    <div className='works-page__list' ref={refWorks}>
                        <LazyMotion features={domAnimation}>
                            {listMedia && listMedia.length && listMedia.map((item, index) =>
                                // {Array.from(Array(32), (e, i) =>
                                <motion.div

                                    key={index}
                                    className={`works-page__item ${item.work_photo?.typeMain}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                                >
                                    {
                                        item.work_photo ? (
                                            item.work_photo.isVideo ? //video
                                                <div className={`wrap-media ${item.work_photo?.typeMain}`}>
                                                    {/* <span className='icon-play'></span> */}
                                                    <Link href={`/work/` + item.slug}>
                                                        <video autoPlay muted playsInline loop
                                                            className="gallery__item-video works-video hover-zone gallery__item-post"
                                                            data-cursor="view"
                                                            preload="none">
                                                            <source src={item.work_photo?.media_url} type={item.work_photo?.type} />
                                                        </video>
                                                    </Link>
                                                </div>
                                                : <div className={`wrap-media ${item.work_photo?.typeMain}`}>
                                                    <Link
                                                        className="btn-gtm "
                                                        data-gtm-category="Workspage"
                                                        data-gtm-action="Clicked_Workspage_Link"
                                                        data-gtm-label={item.name}
                                                        href={`/project/` + item.slug}>
                                                        <figure className='works-page__image'>
                                                            <img
                                                                className={`z-[1] ${item.work_photo ? '' : 'w-full'}`}
                                                                alt={item.client?.name || 'ipossible'}
                                                                data-lazy
                                                                data-src={item.work_photo ? ImageUrl(item.work_photo.id + ImgQuality) : imgPlaceHolder}
                                                            />
                                                            <ImagePlaceholder />
                                                        </figure>
                                                    </Link>
                                                </div>
                                        ) ://work_photo === null
                                            <Link
                                                data-gtm-category="Workspage"
                                                data-gtm-action="Clicked_Workspage_Link"
                                                data-gtm-label={item.name}
                                                href={`/project/` + item.slug} className={`btn-gtm wrap-media ${item.work_photo?.typeMain}`}>
                                                <figure className='works-page__image'>
                                                    <img
                                                        className="undefined"
                                                        alt="Mountains"
                                                        src="/images/logo.svg" />
                                                </figure>
                                            </Link>
                                    }
                                    <div className='works-page__text'>
                                        <Link
                                            className="btn-gtm "
                                            data-gtm-category="Workspage"
                                            data-gtm-action="Clicked_Workspage_Link"
                                            data-gtm-label={item.name}
                                            href={`/project/` + item.slug}>
                                            <h3 className='left'>{item.client?.name}</h3>
                                        </Link>
                                        <span className='right'>{item.location}</span>
                                    </div>
                                </motion.div>
                            )}
                        </LazyMotion>
                    </div>
                </div>
            </div>
            {/* </Layout> */}
        </>
    )
}

Works.getInitialProps = async (ctx) => {
    const res = await fetch('https://cms.ipossible.com.sg/items/config')
    const json = await res.json()
    const result = json.data

    console.log({ json });
    return { props: { stars: result } }
}

export default Works
