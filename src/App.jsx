/**
 * App组件 负责总入口
 * */
import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="content">
                    {this.props.children}
                </div>

                没有children
            </div>
        )
    }
}

function select(state) {
    return state;
}

export default connect(select)(App)