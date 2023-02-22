import Head from 'next/head';

export default function Post({ post }) {

  console.log({ post });
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
      <div className='text-[1.5rem]'>
        ID: {post?.id}
        <br />
        Name: {post?.name}
        <br />
        Slug: {post?.slug}
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
