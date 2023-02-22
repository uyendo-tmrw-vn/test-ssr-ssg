import { useEffect, useState, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ErrorPage } from 'next/error';
import TagManager from "react-gtm-module";

import '../styles/index.scss'

import useWindowDimensions from '@components/useWindowDimensions';
import MetaTag from '@components/MetaTag';
import Header from '@components/Header';
import ModalVideo from '@components/ModalVideo';
import AppContext from '@components/AppContext';
import api from 'api/axiosServices';
import { ApiUrl } from '@api/apiUrl';
import { baseURL, ImageUrl, handleError, RunCriptExternal, mappingMedia, CallApiConfig } from '@components/Common';
import { Loading } from '@components/Loading';


export default function App({ Component, pageProps, post }) {

  const { height, width } = useWindowDimensions();
  const router = useRouter();
  const [isLoading, setLoading] = useState(true)
  const [resConfigData, setResConfigData] = useState()
  const [linkVideo, setLinkVideo] = useState()
  const [listProject, setListProject] = useState()//for sample
  const [test, setTest] = useState([])
  const [history, setHistory] = useState([])

  const [videoModal, setVideoModal] = useState({
    isOpen: false, videoUrl: null
  });

  const CallApi = async () => {
    try {
      await api.get(baseURL + ApiUrl.config)
        .then(data => {
          if (data.status === 200) {
            setResConfigData(data.data.data)
          }
        })
    } catch (error) {
      handleError(error)
      setLoading(false)
    }

    try {
      await api.get(baseURL + ApiUrl.home)
        .then(data => {
          if (data.status === 200) {
            setListProject(data.data.data) //set for slider

            let listProjectClone = data.data.data; //get url video on popup
            for (let i = 0; i < listProjectClone.length; i++) {
              let item = listProjectClone[i]
              let x = item.main_photo?.type?.split('/')[0]
              if (x === 'video') {
                setVideoModal({ 
                  ...videoModal, 
                  videoUrl: ImageUrl(item.main_photo.id),
                  showreelReviewUrl: ImageUrl(item.showreel_review)
                 })
              }
            }
          }
        })
    } catch (error) {
      handleError(error)
    }
  }

  // set video to modal 
  useEffect(() => {
    listProject && listProject.map((item) =>
      item.main_photo.isVideo
        ? setVideoModal({
          isOpen: false,
          videoUrl: item.main_photo?.media_url,
          showreelReviewUrl: item.showreel_review
        })
        : null
    )

  }, [listProject])

  // useEffect(() => {
  //   if (videoModal) {
  //     console.log({ videoModal });
  //   }
  // }, [videoModal])


  useEffect(() => {
    CallApi()
    setLoading(false)
    // TagManager.initialize({ gtmId: 'GTM-KCCMMWK' })
    // console.log(111, process.env.NODE_ENV, process.env.GOOGLE_TAG_MANAGER_ID);
    process.env.NODE_ENV === "production"
      ? TagManager.initialize({ gtmId: process.env.GOOGLE_TAG_MANAGER_ID })
      : ''
  }, []);


  useEffect(() => {
    globalThis?.sessionStorage.setItem('router', test)
    setHistory(test)
  }, [test]);


  useEffect(() => {
    const prevPage = history[history.length - 2]
    if (prevPage == '/' && width < 1023) {
      router.reload(true)
    }
  }, [history]);


  useEffect(() => {
    setVideoModal({ ...videoModal, isOpen: false })
    setTest(prevState => [...prevState, router.asPath])
  }, [router]);


  if (!pageProps) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <MetaTag
        logo={ImageUrl(resConfigData?.favicon_image)}
        description={resConfigData?.meta_description}
        siteName={resConfigData?.site_name}
        imageSeo={ImageUrl(resConfigData?.seo_image)}
      />
      <AnimatePresence mode="wait" initial={false}>
        <AppContext.Provider value={{ setVideoModal, videoModal, setLoading, isLoading, listProject, resConfigData }} >
          <Header fb={resConfigData?.social_facebook} instagram={resConfigData?.social_instagram} />
          <ModalVideo />
          <Loading />
          <motion.main className={`main ${router.route === '/' ? 'main-home' : 'main-children'}`} >
            <Component {...pageProps} key={router.asPath} />
          </motion.main>
        </AppContext.Provider>
      </AnimatePresence>
      {/* <Script type="text/javascript" id="hs-script-loader" async defer strategy="afterInteractive" src="/js/Plankton.js" /> */}
    </>
  )
}

