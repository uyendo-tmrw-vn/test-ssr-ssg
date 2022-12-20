import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';



export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    console.log({ posts });
    const Result = posts.map(post => ({ params: { id: post.id.toString() } }))

    // const paths = posts.map(post =>({
    //     params: {id: post.show.id},
    // }))

    console.log({ Result });
    return {
        paths: Result,
        fallback: 'blocking'
    }
}
export async function getStaticProps({ params }) {
    console.log({ params });
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

// export async function getStaticPaths() {
//     const idList = getproducts().map(product => product.id)
//     const params = idList.map(id => ({ params: { productId: id } }))

//     return {
//         fallback: false,
//         paths: params,
//     };
// }
