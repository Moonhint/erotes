// @ts-nocheck
import YouTube from 'react-youtube';

import './VideoSide.css';

function VideoSide({ song }: { song: any}) {

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const width80 = (width * 100) / 100;

    const opts = {
        height: (width80 / 2) + 70,
        width: width80 - 0,
        playerVars: {
            autoplay: 1,
            rel: 0,
            controls: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            fs: 0,
            color: 'white',
            frameborder: 20,
            disablekb: 1,
            showinfo: 0,
            autohide: 2,
        },
    };

    const onReady = (event:any) => {
        event.target.pauseVideo();
    }

    const onPlay = (_event:any) => {
        song.pause();
    }

    const onPause = (_event:any) => {
        song.play();
    }

    const onEnd = (_event:any) => {
        song.play();
    }

    return (
        <div className="video-side">
            <div className="upper-wave-video"/>
            <div className="youtube-container">
                <YouTube videoId="cmkRjqkAX2M" containerClassName='wedding-video' opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} onEnd={onEnd} />
            </div>
            <div className="bottom-wave-video"/>
        </div>
    );
}

export default VideoSide;
