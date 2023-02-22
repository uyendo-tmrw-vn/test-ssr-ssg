import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { baseURL, ImageUrl, imgPlaceHolder, mappingMedia, RunCriptExternal, VideoConfig, ImgQuality } from './Common';
import { useRouter } from 'next/router';
import { HomeProject } from '@fakes/index';
import AppContext from './AppContext';
import Link from 'next/link';

import { motion } from 'framer-motion';


const PlanktonView = ({ listProject, eleHand }) => {

    const { setVideoModal, videoModal, setLoading, isLoading } = useContext(AppContext)
    const router = useRouter();
    const videoRef = useRef(null);
    const [listText, setListText] = useState(HomeProject.ArrText)
    const [listMedia, setListMedia] = useState(HomeProject.ArrMedia)
    const [count, setCount] = useState(false)
    const [isOpacity, setOpacity] = useState(false)

    const [isLoaded, setIsLoaded] = useState(false)
    const [activeItem, setActiveItem] = useState(null)

    const refHome = useRef(null);
    // useCheckExistItem(refHome, eleHand);


    const OpenModalVideo = (url) => {
        setVideoModal({ isOpen: true, videoUrl: url })
    }

    const TopWorksTitle = (item, key = 0, type) => {
        return (
            <div id={'gallery-title-' + key} key={key} data-title={key} className={`heading top-works-gallery-title title-id-${item.id}`}>
                <h2 className="heading__big">{item.title}</h2>
                <div className='heading__sub'>{item.location}</div>
                <Link className='heading__img flex md:hidden' href={item.hide_all_work === true ? '/project' : '/project/' + item.slug}>
                    Find Out More <img src="/images/contact/contact-arrow.png" />
                </Link>
            </div>
        )
    };
    const ClickGalleryItemMobile = (e, hide_all_work, id, index) => {


        if (window.innerWidth < 768) {

            // let timeOut1 = 0, timeOut2 = 0;

            let data_title = document.querySelectorAll(".top-works-gallery-title")
            if (data_title.length) {
                for (let i = 0; i < data_title.length; i++) {
                    const element = data_title[i];
                    element.classList.remove('active')
                    // element.className = 'heading top-works-gallery-title'
                }
            }

            let gallery_item = document.querySelectorAll(".gallery__item")
            if (gallery_item.length) {
                for (let i = 0; i < gallery_item.length; i++) {
                    const element = gallery_item[i];
                    element.classList.remove('active')
                }
            }

            if (index) {
                document.querySelector('[data-item="' + index + '"]').classList.add('active')
                document.querySelector('[data-title="' + index + '"]').classList.add('active')
            }


        } else {
            router.push(hide_all_work === true ? '/project' : '/project/' + id)
        }
    }

    useEffect(() => {
        console.log({ activeItem });
    }, [activeItem])

    const TopWorksGallery = (data) => {
        if (data && data.length) {
            console.log({data});
            return (
                data && data.length && data.map((item, index) => {
                    return (
                        <div
                            data-item={index}
                            key={index + 'asdf'}
                            id={'gallery-item-' + index}
                            className={`gallery__item item-id-${item.id} image ${isLoaded ? 'opacity-[1]' : 'opacity-[0]'}`}>
                            <div className="drag-panel hover-zone" data-cursor="drag" />
                            <div className="gallery__item-slide">
                                <div className="gallery__item-img">
                                    {
                                        item.main_photo?.isVideo === false &&
                                        <div
                                            onMouseDown={(e) => ClickGalleryItemMobile(e, item.hide_all_work, item.slug, index)}
                                            onTouchStart={(e) => ClickGalleryItemMobile(e, item.hide_all_work, item.slug, index)}
                                            id={"gallery__item-img-" + index}
                                            data-gtm-category="Homepage"
                                            data-gtm-action="Clicked_Homepage_Link"
                                            data-gtm-label={item.name}
                                            className={`btn-gtm gallery__item-link top-works-video-link gallery__item-imginner`}
                                        >
                                            <img

                                                className='hover-zone gallery__item-post ls-is-cached lazyloaded'
                                                data-cursor="view"
                                                decoding="async"
                                                alt={item.client?.name || 'ipossible'}
                                                data-src={item?.main_photo?.media_url + `?quality=20` ? item?.main_photo?.media_url + `?quality=20` : imgPlaceHolder}
                                                src={item?.main_photo?.media_url + `?quality=20` ? item?.main_photo?.media_url + `?quality=20` : imgPlaceHolder}
                                            />
                                        </div>
                                    }
                                    {
                                        item.main_photo?.isVideo === true &&
                                        <div className='top-works-video-link video-wrap'>
                                            <video
                                                onClick={() => OpenModalVideo(item.main_photo?.media_url)}
                                                ref={videoRef}
                                                playsInline
                                                autoPlay muted loop
                                                src={ImageUrl(item.showreel_review)}
                                                data-type='video/mp4'
                                                className="works-video hover-zone gallery__item-post"
                                            />
                                        </div>
                                    }


                                </div>
                            </div>
                        </div >
                    )
                })
            )

        }
    }

    useEffect(() => {
        if (router.pathname === '/') {
            const script = document.createElement('script');
            script.src = "/js/Plankton.js";
            script.async = true;
            // script.defer = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
                document.querySelector("html").className = ''
            }
        }
    }, [router]);


    useEffect(() => {
        TopWorksGallery(listProject)
        setIsLoaded(true)
        setTimeout(() => {
            setCount(true)
        }, 1000);

        setTimeout(() => {
            setOpacity(true)
        }, 3000);


    }, [])

    useEffect(() => {
        if (eleHand === false) {
            document.querySelector('#gallery-title-1')?.classList.add('active')
            document.querySelector('#gallery-item-1')?.classList.add('active')
        }
    }, [eleHand])



    const visibleTodos = useMemo(() => {
        if (listProject) {
            let listProjectClone = [].concat(listProject);
            let listTextTemp = [];
            for (let i = 0; i < listProjectClone.length; i++) {
                // Title 
                const objectTitle = {
                    title: listProjectClone[i].client?.name,
                    location: ((listProjectClone[i].name && listProjectClone[i].location != " ") ? listProjectClone[i].name + ', ' : listProjectClone[i].name) + listProjectClone[i].location,
                    id: listProjectClone[i].id,
                }
                listTextTemp.push(objectTitle)

                // List image on slider 
                mappingMedia(listProjectClone[i])

            }
            setListMedia(listProjectClone)
            setListText(listTextTemp)

            // This calculation will run twice if any of the dependencies change.
            return listProject && TopWorksGallery(listProjectClone)
        }
    }, [count]);



    return (
        <>
            {/* <button className='reloadSlider bg-[red] p-2 absolute right-[10px] top-[10px] z-[999]'>reload</button> */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }} id="primary" className={`site-main home blog ${isOpacity ? 'opacity-[1]' : 'opacity-[0]'}`} data-barba="wrapper" aria-live="polite">
                <div className="site-main-inner" data-barba="container" data-barba-namespace="index">
                    <div id="top-works-gallery-title-wrap"
                        className="top-works-gallery-title-wrap"
                        data-scroll-sticky data-scroll-target=".data-inner"
                        data-scroll
                    >
                        {
                            listText && listText.length && listText.map((item, index) => {
                                return TopWorksTitle(item, index, '')
                            })
                        }
                    </div>
                    <div id="data-container" data-scroll-container data-horizontal="true" data-scroll-section-id="section0" data-scroll-section-inview>
                        <div className="data-inner">
                            <div className="top-works-content">
                                <div id="top-works-gallery" className="top-works-gallery" ref={refHome}>
                                    {visibleTodos}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cursor" className="has-default-icon" />
            </motion.div>
        </>
    )
};

export default PlanktonView
