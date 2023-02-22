import { ApiUrl } from "@api/apiUrl"
import api from "@api/axiosServices"

export const baseURL = 'https://cms.ipossible.com.sg'
export const imgPlaceHolder = '/images/placeholder-logo.jpg'
export const imgPlaceHolderHorizontal = '/images/seo.jpg'
export const videoSample = '/video/sample-1.mp4'
export const logo = '/images/logo.svg'
export const aboutPoster = '/images/about/about-poster.png'
export const ImgQuality = '?quality=50'

export function ImageUrl(id) {
    if (id) {
        return baseURL + '/assets/' + id
    } return;
}

export function mappingMedia(item) {
    if (item && item.main_photo) {
        // List image on slider 
        let x = item.main_photo?.type?.split('/')[0]
        const objectMedia = {
            id: item.main_photo.id,
            type: item.main_photo.type,
            typeMain: x,
            isVideo: x === 'video' ? true : false,
            media_url: ImageUrl(item.main_photo?.id),
        }
        item.main_photo = objectMedia
    }

    return item
}
export function mappingMediaWorks(item) {
    if (item && item.work_photo) {
        // List image on slider 
        let x = item.work_photo?.type?.split('/')[0]
        const objectMedia = {
            id: item.work_photo.id,
            type: item.work_photo.type,
            typeMain: x,
            isVideo: x === 'video' ? true : false,
            media_url: ImageUrl(item.work_photo?.id),
        }
        item.work_photo = objectMedia
    }

    return item
}

export function handleError(error) {
    if (error) {
        if (error.response?.status === 400) {
            console.error(`HTTP 400 error occured`);
        }
        if (error.response?.data) {
            console.error(error);
        }
    }
}

export function RunCriptExternal() {
    const script = document.createElement('script');
    script.src = "/js/Plankton.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script)
    }
}

export function VideoConfig(videoUrl, videoType, isControls) {
    const params = {
        autoplay: true,
        controls: isControls,
        muted: true,
        responsive: true,
        fluid: true,
        loop: true,
        preload: true,
        sources: [
            {
                src: videoUrl,
                type: videoType
            }
        ],

    }
    return params
}

export function CheckExist(value1, value2) {
    let resutl =null;
    if(value1){
        resutl = value1
    }else{
        resutl = value2
    }
    return resutl
}

