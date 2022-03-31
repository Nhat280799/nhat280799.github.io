import video1 from './video/video1.mp4';
import { forwardRef  } from 'react';

function video(props,reff) {
    return (
        <video ref={reff} src={video1}  width = {"250px"} />
    )
}

export default forwardRef(video);

