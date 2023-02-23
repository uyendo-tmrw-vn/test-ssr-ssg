import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import SwiperCore, { Pagination } from "swiper/core";
import { Keyboard, Mousewheel, Autoplay } from "swiper";
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { baseURL, ImageUrl, handleError, imgPlaceHolder, ImgQuality, CheckExist } from '@components/Common';
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

export default function Post({ post }) {
  const { resConfigData } = useContext(AppContext)
  return (
    <>
      <MetaTag
        title={post?.name}
        metaTitle={post.meta_title ? post.meta_title : post?.name}
        metaDescription={post.meta_description ? post.meta_description : post?.description}
        imageSeo={'https://cms.ipossible.com.sg/assets/' + post?.work_photo?.id}
        siteName={resConfigData?.site_name}
      />
      <div className='product-detail-page'>
        <Heading title={post?.client?.name} sub={post?.name + ', ' + post?.location} />
        <div className='SwiperSliderNormal'>
          {(() => {
            if (post?.photos && post?.photos.length && post?.photos.length > 1) {
              return (
                <Swiper className='SwiperSliderNormal__slider'
                  centeredSlides={true}
                  centerInsufficientSlides={true}
                  slidesPerView={2.05}
                  spaceBetween={3}
                  loop={post?.photos.length > 1 ? true : false}
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
                  {post?.photos.length && post?.photos.map((e, i) =>
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
            } else if (post?.photos && post?.photos.length && post?.photos.length === 1) {
              return (
                post?.photos && post?.photos.length && post?.photos.length === 1 &&
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
                    src={post?.photos[0].directus_files_id ? ImageUrl(post?.photos[0].directus_files_id) : imgPlaceHolder}
                  />
                </motion.div>
              )
            } else {
              return ('')
            }
          })()}
          <div className="container">
            <div className='SwiperSliderNormal__text'>
              {post?.description}
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
      </div>
    </>

  );
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const res = await fetch(`https://cms.ipossible.com.sg/ipossible-endpoint/projects/slug/${params.id}`)
  const post1 = await res.json()
  const post = await post1.data

  return {
    props: {
      post,
    }
  }
}

// export async function getStaticPaths() {
//   const data = await fetch('https://cms.ipossible.com.sg/items/projects?filter[status][_eq]=published&fields=id,name,slug,description,location,hide_all_work,main_photo.id,photos.*,main_photo.type,client.id,client.name&sort=+sort');
//   console.log(444, { data });
//   const posts1 = await data.json();
//   const posts = await posts1.data;

//   //return array with {id:value}
//   const Result = posts.map(post => ({ params: { id: post.slug.toString() } }))
//   console.log({ Result });
//   console.log(Result[0]);
//   return {
//     paths: Result,
//     fallback: 'blocking'
//   }
// }
// export async function getStaticProps({ params }) {
//   const data = await fetch(`https://cms.ipossible.com.sg/ipossible-endpoint/projects/slug/${params.id}`);
//   const post1 = await data.json();
//   const post = await post1.data;

//   return {
//     props: {
//       post,
//     },
//     revalidate: 10, // In seconds
//   }
// }