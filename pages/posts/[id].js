import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';


export default function Post({ post }) {
    return (
        <Layout>
            {post?.title}
            <br />
            {post?.id}
            <br />
            {post?.date}
        </Layout>
    );
}

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log(444, { data });
  const posts = await data.json();

  //return array with {id:value}
  const Result = posts.map(post => ({ params: { id: post.id.toString() } }))
  console.log({ Result });
  return {
    paths: Result,
    fallback: 'blocking'
  }
}
export async function getStaticProps({ params }) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await data.json();

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  }
}
