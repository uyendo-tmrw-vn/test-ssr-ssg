import Link from 'next/link'
import Image from 'next/legacy/image'
import { useState, useEffect, useContext, useRef } from 'react';
import { useRouter } from "next/router";
import { motion, AnimatePresence } from 'framer-motion';

import useWindowDimensions from './useWindowDimensions';
import AppContext from './AppContext';
import { videoSample } from './Common';

const Header = ({ fb, instagram }) => {
    const router = useRouter();
    const dropdown = useRef(null);
    const { height, width } = useWindowDimensions();
    const [isToggledSocial, setToggleSocial] = useState(false);
    const [isToggledMenu, setToggleMenu] = useState(false);
    const { setVideoModal, videoModal } = useContext(AppContext)

    useEffect(() => {

        width < 1023 ? setToggleSocial(true) : setToggleMenu(false)
        const handleResize = () => {
            setToggleMenu(false)
            setToggleSocial(false)
            AnimationToggleSocial()
        }
        // window.dispatchEvent(new Event('load'), test)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            // window.removeEventListener('resize', test);
        };

    }, [])

    useEffect(() => {
        setToggleMenu(false);
    }, [router.asPath]);

    useEffect(() => {
        AnimationToggleSocial(isToggledSocial)
        // only add the event listener when the dropdown is opened
        if (!isToggledSocial) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setToggleSocial(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);

    }, [isToggledSocial])

    useEffect(() => {
        if (isToggledMenu === true) {
            setToggleSocial(true)
        }
    }, [isToggledMenu])

    const AnimationClickSocial = () => {
        setToggleSocial(!isToggledSocial)
        document.querySelector('.header__nav').style.width = 'auto'
    }

    const OpenModalVideoFromShowreel = () => {
        // setVideoModal((e) => ({ ...e, isOpen: !e.isOpen, videoUrl: videoSample }))
        setVideoModal((e) => ({ ...e, isOpen: !e.isOpen }))
        setToggleMenu(false)
    }

    const onClickMenu = (e, page) => {
        setToggleMenu(false)
        router.push('/' + page)
    }

    const AnimationToggleSocial = (istoggle) => {
        if (width > 1023) {
            const widthListSocical = document.querySelector('.header__social-link').clientWidth;
            if (istoggle) {
                document.querySelector('.header__nav-wrap').style.transform = "translateX(0)";
                document.querySelector('.header__social').style.transform = "translateX(0)";
            } else {
                document.querySelector('.header__nav-wrap').style.transform = "translateX(" + widthListSocical + "px)";
                document.querySelector('.header__social').style.transform = "translateX(" + widthListSocical + "px)";
            }
        } else {
            return;
        }
    }

    // const LogoClick = () => {
    //     router.push({ pathname: '/' })
    //     setToggleMenu(false)
    // }

    return (
        <header className='header'>
            <div className={`header__bg ${isToggledMenu ? 'active' : ''}`}></div>
            <div className='container'>
                <div className={`header__wrap ${isToggledMenu ? 'menu-active' : ''}`}>
                    <Link
                        data-gtm-category="Navigation"
                        data-gtm-action="Clicked_Navigation_Link"
                        data-gtm-label="logo"
                        href="/" className="btn-gtm header__logo">
                        <Image
                            alt="Mountains"
                            src="/images/logo.svg"
                            width={200}
                            height={100}
                            priority="true"
                        />
                    </Link>
                    <div onClick={() => setToggleMenu(!isToggledMenu)} className='header__toggle'></div>
                    <motion.div className='header__nav'>
                        <div className="flex header__nav-wrap justify-end">
                            <ul className='header__menu'>
                                <li className={`header__menu-child ${router.pathname == "/project" ? "active" : ""}`}>
                                    <span
                                        data-gtm-category="Navigation"
                                        data-gtm-action="Clicked_Navigation_Link"
                                        data-gtm-label="works"
                                        className='btn-gtm link' onClick={(e) => onClickMenu(e, 'project')}>
                                        Works
                                    </span>
                                </li>
                                {
                                    videoModal.videoUrl &&
                                    <li className={`header__menu-child `}>
                                        <span
                                            data-gtm-category="Navigation"
                                            data-gtm-action="Clicked_Navigation_Link"
                                            data-gtm-label="Showreel"
                                            onClick={() => OpenModalVideoFromShowreel()}
                                            className='btn-gtm showcase cursor-pointer'>
                                            Showreel
                                        </span>
                                    </li>
                                }
                                <li className={`header__menu-child ${router.pathname == "/about" ? "active" : ""} `} >
                                    <span
                                        data-gtm-category="Navigation"
                                        data-gtm-action="Clicked_Navigation_Link"
                                        data-gtm-label="about"
                                        className='btn-gtm link' onClick={(e) => onClickMenu(e, 'about')}>
                                        About
                                    </span>
                                </li>
                                <li className={`header__menu-child ${router.pathname == "/contact" ? "active" : ""}`} >
                                    <span
                                        data-gtm-category="Navigation"
                                        data-gtm-action="Clicked_Navigation_Link"
                                        data-gtm-label="contact"
                                        className='btn-gtm link' onClick={(e) => onClickMenu(e, 'contact')}>
                                        Contact
                                    </span>
                                </li>
                            </ul>
                            <div ref={dropdown} className={`header__social-share ${isToggledSocial ? 'w-0 ml-[1rem]' : ' w-[30px] ml-[1.5rem]'} `} onClick={() => AnimationClickSocial()}>
                                <Image
                                    loading="lazy"
                                    width={135}
                                    height={150}
                                    src='/images/social.png'
                                    alt="icon"
                                />
                            </div>
                        </div>
                        <div className={`header__social`}>
                            <div className={`header__social-link ${isToggledSocial ? 'active' : ''} `}>
                                <Link
                                    data-gtm-category="Navigation"
                                    data-gtm-action="Clicked_Navigation_Link"
                                    data-gtm-label="facebook"
                                    className='btn-gtm fb' target='_blank' href={fb ? fb : '/'}>
                                    <img
                                        layout="responsive"
                                        priority="true"
                                        width={135}
                                        height={240}
                                        src='/images/social/social-fb.png'
                                        alt="facebook" />
                                </Link>
                                <Link
                                    data-gtm-category="Navigation"
                                    data-gtm-action="Clicked_Navigation_Link"
                                    data-gtm-label="instagram"
                                    className="btn-gtm " target='_blank' href={instagram ? instagram : '/'}>
                                    <img
                                        priority="true"
                                        width={263}
                                        height={263}
                                        src='/images/social/social-ins.png'
                                        alt="Ins" />
                                </Link>
                                <Link
                                    data-gtm-category="Navigation"
                                    data-gtm-action="Clicked_Navigation_Link"
                                    data-gtm-label="linkedin"
                                    className="btn-gtm " target='_blank' href="/">
                                    <img
                                        priority="true"
                                        width={215}
                                        height={206}
                                        src='/images/social/social-in.png'
                                        alt="ins" />
                                </Link>
                                <Link
                                    data-gtm-category="Navigation"
                                    data-gtm-action="Clicked_Navigation_Link"
                                    data-gtm-label="wechat"
                                    className='btn-gtm in' target='_blank' href="/">
                                    <Image
                                        priority="true"
                                        width={454}
                                        height={420}
                                        src='/images/social/social-we.png'
                                        alt="wechat" />
                                </Link>
                            </div>
                        </div>
                        <div className='copyright'>© 2022 IPOSSIBLE</div>
                    </motion.div>
                </div>
            </div>
        </header >
    )
}

export default Header
