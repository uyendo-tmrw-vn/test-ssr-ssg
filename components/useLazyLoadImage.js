import { useState, useEffect } from 'react';

const useLazyLoadImage = ref => {
    const [isOnScreen, setOnScreen] = useState(false);

    function onIntersect(entries) {
        entries.forEach((entry) => {
            if (entry.target.getAttribute("data-processed") || !entry.isIntersecting)
                return true;
            entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
            entry.target.setAttribute("data-processed", true);
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect);

        document.querySelectorAll("[data-lazy]").forEach((img) => {
            observer.observe(img);
        });

        return () => {
            observer.disconnect();
        };
    });
};
export default useLazyLoadImage