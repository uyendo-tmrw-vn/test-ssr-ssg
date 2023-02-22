import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';



export async function getStaticPaths() {
    const data = await fetch('https://cms.ipossible.com.sg/items/projects?filter[status][_eq]=published&fields=id,name,slug,description,location,hide_all_work,main_photo.id,photos.*,main_photo.type,client.id,client.name&sort=+sort');
    const posts = await data.json();
    console.log(1111, { posts });

    const Result = posts.map(post => ({ params: { id: post.id.toString() } }))
    console.log(222, { posts });
    return {
        paths: Result,
        fallback: 'blocking'
    }
}
export async function getStaticProps({ params }) {
    const data = await fetch(`https://cms.ipossible.com.sg/ipossible-endpoint/projects/slug/${params.slug}`);
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