import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useEffect, useState, useRef, useContext } from 'react';

import { baseURL, ImageUrl, handleError, imgPlaceHolder, mappingMediaWorks, ImgQuality } from '@components/Common';
import { JsonWorks } from '@fakes/index';
import { ApiUrl, ApiUrlProjectDetail } from '@api/apiUrl';

import api from 'api/axiosServices';
// import Layout from '@components/Layout';
import Heading from '@components/Heading';
import Link from 'next/link';
import ImagePlaceholder from '@components/ImagePlaceholder';
import useLazyLoadImage from '@components/useLazyLoadImage';
import MetaTag from '@components/MetaTag';
import AppContext from '@components/AppContext';

//bg-[green]
const Works = () => {
    const { resConfigData } = useContext(AppContext)
    const [resData, setResData] = useState()
    const [listMedia, setListMedia] = useState()

    const pageTitle = "All Works"
    const pageDes = "Experiences designed to explore the world and collections of our brands"

    const refWorks = useRef(null);
    useLazyLoadImage(refWorks);

    const CallApi = async () => {
        try {
            await api.get(baseURL + ApiUrl.works)
                .then(data => {
                    if (data.status === 200) {
                        setResData(data.data.data)
                        console.log(2222,data.data.data);
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
                title={pageTitle}
                metaTitle={pageTitle}
                metaDescription={pageDes}
                siteName={resConfigData?.site_name}
            />
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

export default Works
