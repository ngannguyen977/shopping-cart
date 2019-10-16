import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import * as Message from '../contants/Messages';
import MessageComponent from './../components/Message';

 // nhiệm vụ của container là lên store lấy dl về và chuyền cho product component
class MessageContainer extends React.Component{
  render(){
   
    return (
      <MessageComponent />
    );
  } 
}

const mapStateToProps = state =>{
  return {
    
  }
}
export default connect(mapStateToProps, null)(MessageContainer);
