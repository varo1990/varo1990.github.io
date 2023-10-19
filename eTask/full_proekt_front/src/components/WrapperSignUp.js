import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function WrapperSignUp(props) {
  const token = useSelector(state => state.users.token);

  if (token) {
    return <Navigate to="/dashboard" replace/>
  }
  return (
    <>
      {props.children}
    </>
  );
}

export default WrapperSignUp;