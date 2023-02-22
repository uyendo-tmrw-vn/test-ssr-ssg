import Image from 'next/legacy/image'
import videojs from "video.js";
import AppContext from './AppContext';
import useWindowDimensions from './useWindowDimensions';

import { motion } from "framer-motion";
import { useContext, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const ModalVideo = () => {
    const { height, width } = useWindowDimensions();
    const { setVideoModal, videoModal } = useContext(AppContext)
    const refVideoModal = useRef()
    const [status, setStatus] = useState(false)
    const [modalOnPage, setModalOnPage] = useState('modal-home')
    const router = useRouter();

    const CloseModalVideo = () => {
        setVideoModal({ ...videoModal, isOpen: false })
    }

    const ActionVideo = () => {
        if (refVideoModal && refVideoModal.current) {
            setStatus(!status)
            if (status === false) {
                refVideoModal.current.play()
            }
            else {
                refVideoModal.current.pause()
            }
        }
    }

    useEffect(() => {
        if (router && router.pathname && router.pathname !== '/') {
            setModalOnPage('modal-page-other')
        }
    }, [router])

    const handlePlayerReady = (player) => {
        refVideoModal.current = player;
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <motion.div
            className="relative"
            initial={{
                opacity: 0,
                width: 0
            }}
            animate={{
                opacity: videoModal.isOpen ? 1 : 0,
                zIndex: videoModal.isOpen ? 3 : -1,
                width: videoModal.isOpen ? '100%' : '20%'
            }}
            exit={{
                opacity: 0,
                width: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}

        >
            <div className={`modal-video ${modalOnPage}`}>
                <div className='container'>
                    <div className="wrap ">
                        {/* {
                            status === false &&
                            <span onClick={() => ActionVideo()} className='icon-play'></span>
                        } */}

                        <span onClick={() => CloseModalVideo()} className='icon-close'>
                            <i className='text'>Close</i>
                            <i className='icon'></i>
                        </span>
                        <video
                            playsInline
                            autoPlay muted controls
                            onClick={() => ActionVideo()}
                            width="100%"
                            src={videoModal.videoUrl} type="video/mp4"
                            className="modal-video video-js vjs-theme-city"
                        />
                        {/* <VideoJS
                            className="video-js"
                            onReady={handlePlayerReady}
                            options={{
                                navigationUI: 'hide',
                                autoplay: width > 1023 ? true : false,
                                controls: true,
                                muted: true,
                                responsive: true,
                                fluid: true,
                                loop: true,
                                preload: 'auto',
                                dataSetup: '',
                                aspectRatio: '16:9',
                                loadingSpinner: true,
                                sources: [
                                    {
                                        src: videoModal.videoUrl,
                                        type: 'video/mp4'
                                    }
                                ],
                            }}
                        /> */}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ModalVideo
