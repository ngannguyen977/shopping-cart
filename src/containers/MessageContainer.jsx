import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import MessageComponent from './../components/Message';

 // nhiệm vụ của container là lên store lấy dl về và chuyền cho product component
class MessageContainer extends React.Component{
  render(){
    var {message} = this.props
    return (
      <MessageComponent message = {message}/>
    );
  } 
}
// check props nhận vào trên store
MessageContainer.propTypes = {
  message: propTypes.string.isRequired
}
const mapStateToProps = state =>{
  return {
    message : state.message
  }
}

export default connect(mapStateToProps, null)(MessageContainer);
