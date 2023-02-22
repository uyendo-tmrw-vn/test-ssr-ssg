import { logo } from "./Common";

const ImagePlaceholder = (img) => {
    return (
        <span className='placeholder-img'>
            <img alt="ipossible" src={img.src ? img.src : logo} />
        </span>
    )
};

export default ImagePlaceholder
