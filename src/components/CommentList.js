import React from 'react';
import {connect} from 'react-redux';

class CommentList extends React.Component{
    listRender(){
        return this.props.commentList.map(item => {
            return(
                <li key={item}>
                    {item}
                </li>
            )
        })
    }

    render(){
        return(
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.listRender()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        commentList: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);