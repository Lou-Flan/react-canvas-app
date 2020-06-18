import React from "react";

const PenSelector = (props) => {
    const lineWidth = props.lineWidth
    function onInputChange(event) {
        const onPenSelectorChange = props.onPenSelectorChange
        onPenSelectorChange(event.target.value)
    }
    
    return (
        <div>
            <label>Pencil thickness:</label>
            <input 
                type="number" 
                value={lineWidth} 
                onChange={onInputChange} 
            />
        </div>
        
    );
}

export default PenSelector;