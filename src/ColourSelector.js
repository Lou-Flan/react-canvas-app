import React, { Component } from "react";

class ColourSelector extends Component {

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        const { hex } = this.props;
        return (
            <input type="color" defaultValue={hex} onChange={this.onInputChange} />
        );
    }
}

ColourSelector.defaultProps = {
    hex: "#f4424b"
}

export default ColourSelector;