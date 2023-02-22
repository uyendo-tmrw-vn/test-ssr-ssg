
import { useState, useEffect, useContext } from 'react';
import Image from 'next/legacy/image'
import { motion } from "framer-motion";
import AppContext from './AppContext';

export const Loading = () => {
    const [load, setLoad] = useState()
    const { isLoading, setLoading } = useContext(AppContext)

    // useEffect(() => {
    //     console.log({ handSwipe });
    // }, [handSwipe])

    useEffect(() => {
        setLoad(isLoading)
    }, [isLoading])

    const close = () => {
        setLoading(false)
    }

    return (
        <>
            <div className={`loading flex flex-col items-center relative ${load ? 'z-[999] visible opacity-[1]' : 'z-[-1] invisible opacity-0'}`}>
                <div className="lds-ripple">
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
                <div className="ml-[5px] mt-[0.2rem] text-base"> Loading... </div>
            </div>
        </>
    );
};