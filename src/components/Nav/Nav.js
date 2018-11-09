import React from 'react';
import {withRouter, Link} from 'react-router-dom';




function Nav (props){
    
  if(props.location.pathname === '/'){return(<div>hey</div>)}
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

export default withRouter(Nav)