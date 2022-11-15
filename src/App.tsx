import React, {useRef, useEffect, useState} from 'react';
import './App.scss';

interface ISize {
    width: number;
    height: number;
}

function App() {
    const appRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const photoRef = useRef<HTMLCanvasElement>(null);

    const [appSize, setAppSize] = useState<ISize>({width: 0, height: 0})

    const getVideo = () => {
        console.log('getVideo', 'appSize', appSize)
        if (appSize.width === 0 || appSize.height === 0) return;

        window.navigator.mediaDevices.getUserMedia({
            video: {width: 1920, height: 1080}
        }).then((stream: MediaStream) => {
            if (videoRef.current) {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play()
            }
        }).catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        getVideo()
    }, [videoRef, appSize])

    useEffect(() => {
        if (!appRef.current) return;

        const newAppSize = {
            width: appRef.current.clientWidth,
            height: appRef.current.clientHeight
        }

        if (appSize.width !== newAppSize.width && appSize.height !== newAppSize.height) {
            // todo: remove that console log
            console.log('appSize', appSize, 'newAppSize', newAppSize, appSize !== newAppSize)
            setAppSize(newAppSize)
        }
    }, [appRef, appSize])

    return (
        <div className="App" ref={appRef}>
            <video ref={videoRef}></video>
            {/*<div className="camera">*/}
            {/*    */}
            {/*</div>*/}
            {/*<div className={"result" + hasPhoto ? "hasPhoto" : ""}>*/}
            {/*    <canvas ref={photoRef}></canvas>*/}
            {/*    <button>CLOSE</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
