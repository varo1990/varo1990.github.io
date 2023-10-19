import React, {useEffect} from 'react';
import MenuLeft from "./MenuLeft";
import {socketInit} from "../store/actions/socket";
import { useDispatch, useSelector } from "react-redux";


function Wrapper(props) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.users.token);

  // useEffect(() => {
  //   if (token) {
  //     dispatch(socketInit(token))
  //   }
  // }, [token]);


  if (!token) {
    window.location.href = '/'
    return null
  }



    return (
        <div className='wrapper'>
            <MenuLeft/>
            {props.children}
        </div>
    );
}

export default Wrapper;