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
        const url1 = "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg";
        const url2 = "https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg";


        return (

            <div className="App">
                <header>
                    <h1 style={{color:'blue'}}>My first React AVATAR</h1>
                </header>
                <Avatar
                    shape = {circle}
                    imgUrl = {url1}/>

                <Avatar
                    shape={square}
                    imgUrl={url2}/>



            </div>
        );
    }
}

export default App;
