import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

class App extends Component {
    render(){
        return (
            <div>
                <h1>Welcome To Your Drawing Pad</h1>
                <ColourSelector hex="#f4424b" />
            </div>
        );
    }
}

export default App;