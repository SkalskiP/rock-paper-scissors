import React, {useRef} from 'react';
import './GameView.scss';

export const GameView: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const onWindowResize = () => {
        console.log('onResize')

        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth
            canvasRef.current.height = window.innerHeight

            console.log("width", window.innerWidth)
            console.log("height", window.innerHeight)
        }
    }

    window.addEventListener("resize", onWindowResize)

    return(<div className={"game-view"}>
        <canvas ref={canvasRef}/>
    </div>)
}