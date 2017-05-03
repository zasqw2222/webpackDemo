/**
 * App组件
 * */
import React from 'react';
import Headers from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


export default class App extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <Headers/>
                <div>
                    <Sidebar/>
                    <div className="content">
                        {this.props.children}
                    </div>

                </div>

            </div>
        )
    }
}
