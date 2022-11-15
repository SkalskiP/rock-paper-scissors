import React, {useState} from 'react';
import './GameView.scss';
import Webcam from "react-webcam";

export const GameView: React.FC = () => {
    const [width, setWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);

    // const canvasRef = useRef<HTMLCanvasElement>(null);

    const onWindowResize = () => {
        console.log('onResize')

        setHeight(window.innerHeight)
        setWidth(window.innerWidth)

        // if (canvasRef.current) {
        //     canvasRef.current.width = window.innerWidth
        //     canvasRef.current.height = window.innerHeight
        //
        //     console.log("width", window.innerWidth)
        //     console.log("height", window.innerHeight)
        // }
    }

    window.addEventListener("resize", onWindowResize)

    const videoConstraints = {
        width: width as number,
        height: height as number,
        facingMode: "user"
    };

    return(<div className={"game-view"}>
        {width && height && <Webcam
            audio={false}
            height={height}
            // ref={webcamRef}
            // screenshotFormat="image/jpeg"
            width={width}
            videoConstraints={videoConstraints}
        />}
        {/*<canvas ref={canvasRef}/>*/}
    </div>)
}