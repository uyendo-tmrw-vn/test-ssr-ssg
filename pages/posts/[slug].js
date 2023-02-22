import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';



export async function getStaticPaths() {
    const data = await fetch('https://cms.ipossible.com.sg/items/projects?filter[status][_eq]=published&fields=id,name,slug,description,location,hide_all_work,main_photo.id,photos.*,main_photo.type,client.id,client.name&sort=+sort');
    const posts = await data.json();
    console.log(1111, { posts });

    const Result = posts.data.map(post => ({ params: { slug: post.slug.toString() } }))
    console.log(222, { Result });
    return {
        paths: Result,
        fallback: 'blocking'
    }
}
export async function getStaticProps({ params }) {
    const data = await fetch(`https://cms.ipossible.com.sg/ipossible-endpoint/projects/slug/${params.slug}`);
    const post1 = await data.json();
    const post = await post1.data;

    return {
        props: {
            post,
        },
        revalidate: 1, // In seconds
    }
}


export default function Post({ post }) {
    console.log({ post });
    return (
        <Layout>
            <div className='flex'>
                <h2 className='mr-4 text-[1.3rem] font-[500]'>
                    ID : {post?.id}
                    <br />
                    Name: {post?.name}
                </h2>
                <img className='max-w-[40%]' src={'https://cms.ipossible.com.sg/assets/' + post?.work_photo.id + "?quality=10"} />
            </div>

        </Layout>
    );
}