import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';

export default function Home({ allPostsData }) {
  console.log({ allPostsData });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.data.map(({ slug, date, title },index) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={'posts/' + slug}>{index+1} - {slug}</Link> {title} <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = 'https://cms.ipossible.com.sg/items/projects?filter[status][_eq]=published&fields=id,name,slug,description,location,hide_all_work,main_photo.id,photos.*,main_photo.type,client.id,client.name&sort=+sort';
  const res = await fetch(url);
  const allPostsData = await res.json();
console.log({allPostsData});
  return {
    props: {
      allPostsData,
    },
  };
}