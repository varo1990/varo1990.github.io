import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activateRequest, loginRequest } from "../store/actions/users";
import WrapperSignUp from "../components/WrapperSignUp";

function Activate(props) {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const email = searchParams.get("email")
  const code = searchParams.get("code")

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { payload } = await dispatch(activateRequest({
        email,
        code,
      }));
      if (payload.status === 'error') {
        setMessage(payload.message)
      }
      setLoading(false)
    })().catch(console.error)
  }, [])

  return (
    <WrapperSignUp>
      <div className="form-container">
        <h2>Activate</h2>
        {message ? <p className="activation_message"> {message} </p> : null}
      </div>
    </WrapperSignUp>
  );
}

export default Activate;