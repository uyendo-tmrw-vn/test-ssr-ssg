import { motion, LazyMotion, domAnimation } from "framer-motion"
import Image from 'next/legacy/image'
import Parser from 'html-react-parser';

import { baseURL, ImageUrl, handleError, imgPlaceHolder, imgPlaceHolderHorizontal, aboutPoster, ImgQuality } from '@components/Common';
import { JsonAward } from "@fakes/index";
import { useContext, useEffect, useState } from 'react';
import { Link } from 'next/link';
import { ApiUrl } from '@api/apiUrl';
import api from '/api/axiosServices';
import Heading from "@components/Heading";
import Layout from "@components/Layout";
import ImagePlaceholder from "@components/ImagePlaceholder";
import MetaTag from "@components/MetaTag";
import AppContext from "@components/AppContext";


const About = ({ configResponse }) => {

    const [resData, setResData] = useState(JsonAward)
    const { resConfigData } = useContext(AppContext)


    const CallApiAward = async () => {
        try {
            await api.get(baseURL + ApiUrl.awards)
                .then(data => {
                    if (data.status === 200) {
                        setResData((prev) => ({
                            ...prev,
                            award: data.data.data,
                        }))
                    }
                })
        } catch (error) {
            handleError(error)
            setLoading(false)
        }
    }
    const CallApiAbout = async () => {
        try {
            await api.get(baseURL + ApiUrl.about)
                .then(data => {
                    if (data.status === 200) {
                        setResData((prev) => ({
                            ...prev,
                            about: data.data.data,
                        }))
                    }
                })
        } catch (error) {
            handleError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        CallApiAward()
        CallApiAbout()
    }, [])


    return (
        <>
            <MetaTag
                title={resData?.about?.title}
                description={resData?.about?.description && Parser(resData?.about?.description)}
                siteName={resConfigData?.site_name}
            />
            <Layout>
                <div className="about-page">
                    <Heading title={resData?.about?.title} />
                    <div className="about-page__container ">
                        <div className="about-page__top">
                            <div className="about-page__wrap-video" style={{ backgroundImage: `url(` + aboutPoster + `)` }}>
                                <div className="hidden md:block">
                                    <video playsInline poster={aboutPoster} className="max-w-none w-full bg-ip-black" autoPlay muted loop >
                                        <source src={resData?.about?.banner ? ImageUrl(resData?.about?.banner) : '/video/about-web.mp4'} type="video/mp4" />
                                    </video>
                                </div>
                                <div className=" md:hidden block">
                                    <video playsInline className="max-w-none w-full bg-ip-black relative z-[1]" autoPlay muted loop>
                                        <source src={resData?.about?.banner_mobile ? ImageUrl(resData?.about?.banner_mobile) : '/video/about-mobile.mp4'} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="about-page__wrap-des">
                                <div className="about-page__top-text">
                                    {resData?.about?.description && Parser(resData?.about?.description)}
                                </div>
                            </div>
                        </div>
                        <div className="about-page__awards">
                            <Heading title="Our Awards" />
                            <div className="container">
                                <div className="about-page__awards-list">
                                    <LazyMotion features={domAnimation}>
                                        {resData && resData?.award && resData.award.length > 0 && resData.award.map((item, index) => {
                                            return (
                                                <motion.div
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5 }}
                                                    variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}

                                                    key={index} className="about-page__awards-item">
                                                    {
                                                        item.link !== '#' &&
                                                        <Link data-gtm-category="Aboutpage"
                                                            data-gtm-action="Clicked_Aboutpage_Link"
                                                            data-gtm-label={item.name}
                                                            className="btn-gtm about-page__link" href={item.link}></Link>
                                                    }
                                                    <div className="wrap-img">
                                                        <Image
                                                            layout="responsive"
                                                            loading="lazy"
                                                            objecfit="cover"
                                                            quality="100"
                                                            src={item.image ? ImageUrl(item.image + ImgQuality) : imgPlaceHolder}
                                                            width={800} height={400}
                                                            alt={item.name || 'ipossible'}
                                                            className="about-page__awards-img z-[1]"
                                                        />
                                                        <ImagePlaceholder />
                                                    </div>

                                                    <h3 className="about-page__awards-name">{item.description}</h3>
                                                    <p className="about-page__awards-type">{item.name}</p>
                                                </motion.div>
                                            )
                                        }
                                        )}
                                    </LazyMotion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About
