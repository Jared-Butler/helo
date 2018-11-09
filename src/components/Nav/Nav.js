import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';




function Nav (props){
  {console.log(props)}
    
  if(props.location.pathname === '/'){return(<div></div>)}
  else{
    return(
        <div>
       <Link to='/dashboard'>Home</Link>
       <Link to='/new'>New Post</Link>
       <Link to='/'>Logout</Link>
    
        </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(withRouter(Nav));