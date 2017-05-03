import React from 'react';
import './index.scss'

export default class Home extends React.Component{
    render(){
        return (
            <div className="home">
                HOME
                <img src={require("../../images/hines121200035.jpg")} alt=""/>
            </div>
        )
    }
}

