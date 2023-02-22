import PlanktonView from '@components/PlanktonView';
import AppContext from '@components/AppContext';
// import Layout from '@components/Layout';
import { useContext, useEffect, useState } from 'react';
import { Loading } from '@components/Loading';
import { useRouter } from 'next/router';
import MetaTag from '@components/MetaTag';
import { baseURL, CallApiConfig, ImageUrl } from '@components/Common';
import { ApiUrl, ApiUrlProjectDetail } from '@api/apiUrl';

const Home = ({ props, configResponse }) => {
  const { listProject, resConfigData } = useContext(AppContext)

  const [eleLoading, setEleLoading] = useState(true)
  const [eleHand, setEleHand] = useState(false)

  const router = useRouter();
  useEffect(() => {
    document.querySelector('.loading').style.visibility = 'visible';
    document.querySelector('.loading').style.opacity = '1';
    document.querySelector('.loading').style.zIndex = '1000';
  }, [router]);

  useEffect(() => {
    if (eleHand === true) {
      // document.querySelector('.top-works-gallery-title.title-1').classList.add('active');
    }
  }, [eleHand]);

  useEffect(() => {
    setTimeout(() => {
      setEleHand(true)
    }, 2000);

    function handleClick(event) {
      setEleHand(false);
    }

    // window.addEventListener("wheel", Test);
    window.addEventListener("mousewheel", handleClick);
    window.addEventListener("touchmove", handleClick);
    window.addEventListener("click", handleClick);
    // clean up
    return () => {
      window.removeEventListener("mousewheel", handleClick);
      window.removeEventListener("touchmove", handleClick);
      // window.removeEventListener("wheel", Test);
    }

  }, [])


  return (
    <>
      {/* <Layout> */}
        <PlanktonView eleHand={eleHand} listProject={listProject} />
        {
          eleHand &&
          <div className='eleHand '>
            <span className='eleHandSpan'>
              <img alt="swipe to start" src='/images/arrow-swipe.png' className='' />
            </span>
            {/* <img src='/images/hand.gif' className='w-full max-w-[10rem]' /> */}
          </div>
        }
        <Loading />
      {/* </Layout> */}
    </>
  )
}

export default Home
