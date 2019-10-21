import React from 'react';
import Avatar from "./Avatar";
import App from './App'

class Click extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     value: shape,
        // };

    }
    render() {

        return (
            <div>
                <button onClick={() => {alert('click');}}>Circle</button>
                <button>Square</button>


            </div>
        );
    }
}

export default Click;