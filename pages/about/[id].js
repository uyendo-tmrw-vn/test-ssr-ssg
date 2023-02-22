import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import SwiperCore, { Pagination } from "swiper/core";
import { Keyboard, Mousewheel, Autoplay } from "swiper";
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import api from '@api/axiosServices';
import Works from '../works/index';

import { baseURL, ImageUrl, handleError, imgPlaceHolder, ImgQuality, CheckExist } from '@components/Common';
import { ApiUrl, ApiUrlProjectDetail } from '@api/apiUrl';
import { LazyMotion, domAnimation, motion } from 'framer-motion';

// import Layout from '@components/Layout';
import Heading from '@components/Heading';
import Error from 'pages/_error';

import Image from 'next/legacy/image'
import Link from 'next/link';
import MetaTag from '@components/MetaTag';
import AppContext from '@components/AppContext';


// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Keyboard, Autoplay]);

// export async function getStaticPaths() {
//   const data = await fetch('https://cms.ipossible.com.sg/items/projects?filter[status][_eq]=published&fields=id,name,slug,description,location,hide_all_work,main_photo.id,photos.*,main_photo.type,client.id,client.name&sort=+sort');

//   const x = await data.json();
//   const Result = await x.data.map(post => ({ params: { slug: post.slug.toString() } }));

//   console.log({Result});

//   return {
//     paths: Result,
//     fallback: false
//   }
// }
// export async function getStaticProps({ params }) {
//   const data = await fetch(`https://cms.ipossible.com.sg/ipossible-endpoint/projects/slug/${params.slug}`);

//   const post = await data.json();

//   return {
//     props: {
//       post,
//       title: post.data.name + ', ' + post.data.location,
//       meta_title: CheckExist(post.data.meta_title, post.data.name + ', ' + post.data.location),
//       meta_description: CheckExist(post.data.meta_description, post.data.description),
//       work_photo: 'https://cms.ipossible.com.sg/assets/' + post.data.work_photo.id,
//     },
//   }
// }



const ProjectDetail = ({ post}) => {
  // console.log({post});

  const [detail, setDetail] = useState()
  const { resConfigData } = useContext(AppContext)

  useEffect(() => {
    if (post) {
      setDetail(post)
    }
  }, [])

  return (
    <>
       <Head>
        <title>UyenDo | {post?.name}</title>
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content={'url'} />
        <meta name="keywords" content='test' />
        <meta property="og:type" content="website" />

        <meta name="description" content={post.meta_description ? post.meta_description : post?.description} />
        <meta property="og:image" content={'https://cms.ipossible.com.sg/assets/' + post?.work_photo?.id} />
        <meta property="og:title" content={post.meta_title ? post.meta_title : post?.name} />
        <meta property="og:description" content={post.meta_description ? post.meta_description : post?.description} />
        <meta
          name="robots"
          content={
            process.env.NODE_ENV === "production"
              ? "index, follow"
              : "noindex, nofollow"
          } />
      </Head>
      {/* <Layout> */}
        {/* <div className='product-detail-page'>
          <Heading title={detail?.client?.name} sub={detail?.name + ', ' + detail?.location} />
          <div className='SwiperSliderNormal'>
            {(() => {
              if (detail?.photos && detail?.photos.length && detail?.photos.length > 1) {
                return (
                  <Swiper className='SwiperSliderNormal__slider'
                    centeredSlides={true}
                    centerInsufficientSlides={true}
                    slidesPerView={2.05}
                    spaceBetween={3}
                    loop={detail?.photos.length > 1 ? true : false}
                    speed={700}
                    lazy={true}
                    autoplay={false}
                    autoplaytimeout={3}
                    mousewheel={false}
                    pagination={{
                      clickable: true
                    }}
                    breakpoints={{
                      320: { spaceBetween: 5 },
                      480: { spaceBetween: 10 },
                      540: { spaceBetween: 20 },
                      640: { spaceBetween: 30 },
                      768: { spaceBetween: 40 },
                    }}
                  >
                    {detail?.photos.length && detail?.photos.map((e, i) =>
                      <SwiperSlide key={i} className="">
                        <LazyMotion features={domAnimation}>
                          <img
                            className='w-full'
                            alt='Louis Vuitton'
                            src={e.directus_files_id ? ImageUrl(e.directus_files_id + ImgQuality) : imgPlaceHolder}
                          />
                        </LazyMotion>
                      </SwiperSlide>
                    )}
                  </Swiper>
                )
              } else if (detail?.photos && detail?.photos.length && detail?.photos.length === 1) {
                return (
                  detail?.photos && detail?.photos.length && detail?.photos.length === 1 &&
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                    className="text-center">
                    <img
                      className='w-full'
                      alt='Louis Vuitton'
                      src={detail?.photos[0].directus_files_id ? ImageUrl(detail?.photos[0].directus_files_id) : imgPlaceHolder}
                    />
                  </motion.div>
                )
              } else {
                return ('')
              }
            })()}
            <div className="container">
              <div className='SwiperSliderNormal__text'>
                {detail?.description}
              </div>

              <div className="link-all-works">
                <Link
                  data-gtm-category="Project Detail"
                  data-gtm-action="Clicked_ProjectDetailPage_Link"
                  data-gtm-label="all works"
                  className="btn-gtm "
                  href="/work">
                  <span className="text font-JostMedium">All Works</span>
                  <Image
                    loading="lazy"
                    width={60}
                    height={30}
                    objectFit="contain"
                    alt="Send"
                    src='/images/contact/contact-arrow.png' />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className='text-[1.5rem]'>
        ID: {post?.id}
        <br />
        Name: {post?.name}
        <br />
        Slug: {post?.slug}
      </div>
      {/* </Layout> */}
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const res = await fetch(`https://cms.ipossible.com.sg/ipossible-endpoint/projects/slug/${params.id}`)
  const post1 = await res.json()
  const post = await post1.data

    if (!post.length) { 
    return {
      notFound: true,
    }
   }

  return {
    props: {
      post,
    }
  }
}

export default ProjectDetail
