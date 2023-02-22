import Link from 'next/link';
function Error({ statusCode }) {

    return (
        <div className="page-not-found container h-[45vh] flex flex-col items-center justify-center text-lg">
            {statusCode
                ? <div className='text-[2.2rem]'>{statusCode} | Page Not Found</div>
                : 'An error occurred on client'}
                <Link href="/" className="flex items-center mt-[10px] text-ip-black"><img className=' mt-[3px] mr-[10px] rotate-[180deg] max-w-[35px]' src="/images/contact/contact-arrow.png" /><span className='hover:underline'> Home page</span></Link>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error