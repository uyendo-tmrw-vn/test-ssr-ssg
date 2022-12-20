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
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={'posts/' + id}>Link {id}</Link> {title} <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const allPostsData = await res.json();

  return {
    props: {
      allPostsData,
    },
  };
}