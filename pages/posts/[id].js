import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';



export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    console.log(1111, { data });

    const Result = posts.map(post => ({ params: { id: post.id.toString() } }))
    console.log(222, { posts });
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


export default function Post({ post }) {
    console.log({ post });
    return (
        <Layout>
            Post : {post?.id}
            <br />
            {post?.title}
            <br />
            {post?.date}
        </Layout>
    );
}