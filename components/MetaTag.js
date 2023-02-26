import Head from 'next/head'
import { useRouter } from "next/router";

const MetaTag = ({ title, metaTitle, metaDescription, logo, imageSeo, siteName, ogType, ogImage, twImage }) => {
    const keywords = 'Ipossible, Event, Agency, Public Events'
    const ogImageSeo = imageSeo ? imageSeo : 'https://develop.ipossible-revamp.pages.dev/images/seo.jpg'
    const logoHead = logo ? logo : '/favicon.jpg'

    const router = useRouter()
    const url = 'http://www.ipossible.com.sg/' + router.asPath

    return (
        <Head>
            <title>{(siteName ? siteName : 'iPossible Test') + (title ? (' | ' + title) : '')}</title>
            <link rel="icon" href={logoHead} />
            <meta name="robots" content="follow, index" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImageSeo} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta
                name="robots"
                content={
                    process.env.NODE_ENV === "production"
                        ? "index, follow"
                        : "noindex, nofollow"
                } />
        </Head>
    )
}
export default MetaTag