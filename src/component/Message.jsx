import React from 'react';
import {connect} from 'react-redux';
class Message extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'message':''
        }
    }
 
    render(){
        
        return(
            <h3>
                <span className="badge amber darken-2">{this.props.msg}</span>
            </h3>
        )
    }
}
const mapStateToProps=(state)=>{

    return {
        msg:state.messageReducer.msg
    }
}
export default connect(mapStateToProps,null)(Message);