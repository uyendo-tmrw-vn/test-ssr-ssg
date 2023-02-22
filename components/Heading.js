const Heading = (props) => {
    return (
        <div className='container'>
            <div className='heading'>
                <h2 className='heading__big'>{props.title ? props.title : ''}</h2>
                {props.sub && <p className='heading__sub'>{props.sub}</p>}
            </div>
        </div>
    )
}

export default Heading
