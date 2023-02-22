import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';


export default function Post({ post }) {
  // console.log({post});
    return (
        <Layout>
            ID: {post?.id}
            <br />
            Name: {post?.name}
            <br/>
            Slug: {post?.slug}
        </Layout>
    );
}

export const getServerSideProps =async (ctx)=>{
  const {params} = ctx;
  const res = await fetch(`https://cms.ipossible.com.sg/ipossible-endpoint/projects/slug/${params.id}`)
  const post1 = await res.json()
  const post = await post1.data

  return{
      props:{
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
