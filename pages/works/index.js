import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useEffect, useState, useRef, useContext } from 'react';

import { baseURL, ImageUrl, handleError, imgPlaceHolder, mappingMediaWorks, ImgQuality, DataCommonApi, LayoutMetaCommon } from '@components/Common';
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
const Works = ({ DataConfig }) => {
    // const x= props.stars
    const [config, setConfig] = useState(DataConfig)
    console.log({ config });

    const { resConfigData } = useContext(AppContext)
    const [resData, setResData] = useState()
    const [listMedia, setListMedia] = useState()

    const pageDes = "Experiences designed to explore the world and collections of our brands"

    const refWorks = useRef(null);
    useLazyLoadImage(refWorks);

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
            <MetaTag
                pageTitle={config?.page_title}
                metaTitle={config?.page_title}
                metaDescription={config?.meta_description}
            />
            <Heading title={'All works'} sub={pageDes} />
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
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const res = await fetch('https://cms.ipossible.com.sg/items/config')
    const json = await res.json()
    const result = json.data
    result.page_title = json.data.site_name + " | All Works"
    return { props: { DataConfig: result } }
}

export default Works
