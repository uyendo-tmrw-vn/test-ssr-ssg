import React, { useContext } from 'react';
import videojs from 'video.js';
import { imgPlaceHolder } from '@components/Common';
import AppContext from '@components/AppContext';

export const VideoJS = (props) => {
    const { setVideoModal } = useContext(AppContext)
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { options, onReady, onClickVideo } = props;

    React.useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.muted(options.muted);
            player.src(options.sources);
        }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    const OpenModalVideo = () => {
        setVideoModal({ isOpen: true, videoUrl: options.sources[0].src })
    }

    return (
        <div className='VideoJS' data-vjs-player onClick={onClickVideo}>
            <div className='VideoJSRef' ref={videoRef} />
            <div className='video-link' onClick={() => OpenModalVideo()}></div>
            <img className='placeholder' alt="ipossible" src={imgPlaceHolder} />
        </div>
    );
}

export default VideoJS;