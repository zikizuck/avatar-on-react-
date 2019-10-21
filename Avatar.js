import React from 'react';
import Click from "./Click";

class Avatar extends React.Component {

    constructor(props){
        super(props);

    }

    render() {

        return (
            <div>

                <div>
                    <a href="http://www.avatar.com">
                        <img
                            src={this.props.imgUrl}
                            alt={"avatar"}
                            style={this.props.shape}/>


                    </a>
                </div>
                <Click />
            </div>
        );
    }
}



export default Avatar;