import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from 'actions';

class App extends React.Component{
    renderButton(){
        if(this.props.auth) {
            return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        }
        return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
    }

    renderHeader(){
        return(
            <ul>
                <li>
                    <Link to="/">Homeeeee</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }
    
    render(){
        return(
            <div>
                {this.renderHeader()}
                <Route path="/" exact component={CommentList} />
                <Route path="/post" component={CommentBox} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App)