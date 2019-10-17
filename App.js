import React from 'react';
import './App.css';
import Avatar from "./Avatar";

class App extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {
        const circle = {
            borderRadius:'50%',
            width:'40%'
        };
        const square = {
            borderRadius:'25px',
            width:'40%'
        };
        const url = "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg";

        return (
            <div className="App">
                <Avatar shape={circle}
                        imgUrl={url}/>


            </div>
        );
    }
}

export default App;
