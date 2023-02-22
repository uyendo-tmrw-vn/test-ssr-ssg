import { useState, useEffect } from 'react';

const useCheckExistItem = (ref, eleHand) => {
    let timeOut1 = 0, timeOut2 = 0, times = 0;
    function onIntersect(entries) {
        let arr = []

        times++

        entries.forEach((entry, iEntry) => {
            if (entry.isIntersecting === true) {
                if (times === 1 && (iEntry === 0 || iEntry === 1)) {
                    arr.push(entry)
                }

                if (times != 1) {
                    arr.push(entry)
                }
            }
        });

        if (timeOut1) clearTimeout(timeOut1)
        timeOut1 = setTimeout(() => {
            let data_title = document.querySelectorAll(".top-works-gallery-title")
            if (data_title.length) {
                for (let i = 0; i < data_title.length; i++) {
                    const element = data_title[i];
                    element.className = 'heading top-works-gallery-title'
                }
            }

            let gallery_item = document.querySelectorAll(".gallery__item")
            if (gallery_item.length) {
                for (let i = 0; i < gallery_item.length; i++) {
                    const element = gallery_item[i];
                    element.classList.remove('active')
                }
            }
        }, 500);

        if (timeOut2) clearTimeout(timeOut2)
        console.log({ arr });
        timeOut2 = setTimeout(() => {
            let idItem = 1;
            if (arr.length > 0) {
                idItem = arr[arr.length - 1].target.id.split('gallery-item-')[1]
                document.querySelector('[data-item="' + idItem + '"]').classList.add('active')
                document.querySelector('[data-title="' + idItem + '"]').classList.add('active')

            }
        }, 1000);
    }

    useEffect(() => {
        let observer
        if (eleHand === false) {
            observer = new IntersectionObserver(onIntersect);
            if (window.innerWidth < 768) {
                document.querySelectorAll(".gallery__item").forEach((img) => {
                    observer.observe(img);
                });
            }
            return () => {
                observer.disconnect();
            };
        }

    }, [eleHand]);
};
export default useCheckExistItem