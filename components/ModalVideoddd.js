import Image from 'next/legacy/image'
import videojs from "video.js";
import { motion } from "framer-motion";
import { useContext, useRef, useState, useEffect } from 'react';
import AppContext from './AppContext';
import { useRouter } from 'next/router';
import { VideoConfig, videoSample } from './Common';
import VideoJS from './VideoJs';
import { imgPlaceHolder, imgPlaceHolderHorizontal } from '@components/Common';
import useWindowDimensions from './useWindowDimensions';


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

    // useEffect(() => {
    //     if (videoModal) {
    //         console.log({ videoModal });
    //     }
    // }, [videoModal])

    // useEffect(() => {
    //     setVideoModal({ ...videoModal, videoUrl: videoSample })
    // }, [])

    // useEffect(() => {
    //     if (refVideoModal.current) {
    //         // console.log('videoRef.current', refVideoModal);
    //         videojs(refVideoModal.current,
    //             VideoConfig(refVideoModal.current.dataset.currentSrc, refVideoModal.current.dataset.type)
    //         );
    //     }
    // }, [refVideoModal]);


    useEffect(() => {
        if (router && router.pathname && router.pathname !== '/') {
            setModalOnPage('modal-page-other')
        }
    }, [router])

    const handlePlayerReady = (player) => {
        refVideoModal.current = player;

        // player.on('ended', function () {
        //     player.dispose();
        // });

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <div className={`modal`} style={{ 'display': videoModal.isOpen === true ? 'block' : 'none' }}>
            <div className="modal-bg hover-zone" data-cursor="close" ></div>
            {/* <img src={imgPlaceHolder} /> */}
            {/* <video ref={refVideoModal} className="modal-video" playsInline loop controls data-setup="{}" preload="none">
                <source src={videoSample} type="video/mp4" autostart="false"></source>
            </video> */}

            <div className="modal-content">
                <a onClick={() => setVideoModal({ ...videoModal, isOpen: false })} href="#modal1" className="hover-zone close-icon" data-cursor="close">
                    <div id="modal-cross" className="hover-zone" data-cursor="close">
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <div className="modal-height-video-container">
                    <div className="height-video-wrap video-wrap">
                        <video className="modal-video"
                            playsInline loop muted autoPlay>
                            <source src={videoSample} type="video/mp4" autostart="false"></source>
                        </video>
                        {/* <VideoJS
                            className="video-js modal-video"
                            onReady={handlePlayerReady}
                            options={{
                                poster: "#",
                                playsinline: true,
                                navigationUI: 'hide',
                                autoplay: width > 1023 ? true : false,
                                controls: false,
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
        </div>

    );
};

export default ModalVideo
