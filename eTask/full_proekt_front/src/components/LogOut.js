import React from 'react';
import {useDispatch} from "react-redux";
import {logOut} from "../store/actions/users";

function LogOut(props) {
  // const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>
        // dispatch(logOut())
        {localStorage.removeItem('token')
          window.location.href = '/login'}

      }

              className="out__btn">Log Out</button>
    </div>
  );
}

export default LogOut;