import React from 'react';

class Avatar extends React.Component {

    constructor(props){
        super(props);

    }

    render() {

        return (
            <div>
                <header>
                    <h1 style={{color:'blue'}}>My first React AVATAR</h1>
                </header>
                <div>
                    <a href="http://www.avatar.com">
                        <img
                            src={this.props.imgUrl}
                            alt={"avatar"}
                            style={this.props.shape}/>


                    </a>
                </div>
            </div>
        );
    }
}



export default Avatar;