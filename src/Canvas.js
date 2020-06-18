import React, {Component} from 'react'
import ColourSelector from './ColourSelector'
import PenSelector from './PenSelector'

const canvasStyles = {
    border: "6px solid black"
}
const divStyles = {
    margin: "1em"
}

class Canvas extends Component {
    state = { 
        hex: "#f4424b",
        coords: null,
        height: 400,
        width: 400, 
        lineWidth: 8
    }

    constructor(props) {
            super(props)
            this.canvasRef = React.createRef()
            this.context = null
    }

    componentDidMount() {
        this.setContext()
    }

    componentDidUpdate() {
        this.setContext()
    }

    setContext() {
        this.context = this.canvasRef.current.getContext('2d');
        this.context.strokeStyle = this.state.hex;
        this.context.lineJoin = "round";
        this.context.lineWidth = this.state.lineWidth;
    }

    clearCanvas = (event) => {
        event.preventDefault()
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    }

    onColourSelectorChange = (newHex) => {
        this.setState({ hex: newHex})
    }

    onPenSelectorChange = (newPen) => {
        this.setState({ lineWidth: newPen})
    }

    onCanvasMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const coords = this.state.coords;
        const { height, width } = this.state;
        if (x > 0 && x < width && y > 0 && y < height) {
            if (coords) {
                this.context.beginPath();
                this.context.moveTo(coords[0], coords[1]);
                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
                this.setState({ coords: [x,y]});
            }
        } else {
            this.setState({ coords: null });
        }
    }   

    onCanvasMouseUp = () => {
        this.setState({ coords: null });
    }

    onCanvasMouseDown = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        this.setState({ coords: [x,y]})
    }

    render() {
        const { hex, height, width, lineWidth } = this.state

        return (
            <div>
                <div style={divStyles}>
                    <ColourSelector
                    onColourSelectorChange={this.onColourSelectorChange}
                    hex={hex}
                    />
                    <PenSelector
                    onPenSelectorChange={this.onPenSelectorChange}
                    lineWidth={lineWidth}
                    />
                    <button onClick={this.clearCanvas}>Clear Canvas</button>
                </div>
                <div style={divStyles}>
                    <canvas 
                        ref={this.canvasRef} 
                        width={width}
                        height={height}
                        onMouseMove={this.onCanvasMouseMove}
                        onMouseUp={this.onCanvasMouseUp}
                        onMouseDown={this.onCanvasMouseDown}
                        style={canvasStyles} 
                    />
                </div>
            </div>
        )
    }
}

export default Canvas