import React, {useCallback, useState} from 'react';
import logo from "../assets/image/logo.svg"
import home from "../assets/icon/home.svg"
import sign_up from "../assets/image/register/sign_up.png"
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useDispatch} from "react-redux";
import {registerRequest} from "../store/actions/users";
import WrapperSignUp from "./WrapperSignUp";

function SignUp(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [error, setError] = useState({})
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const handleChange = useCallback((key) => (ev) => {
        setError({...error, [key]: undefined})
        setFormData({...formData, [key]: ev.target.value})
    }, [formData, error]);

    const handleSubmit = useCallback(async (ev) => {
        ev.preventDefault();

        const {payload} = await dispatch(registerRequest(formData))

        if (payload?.status === 'error') {
            return setError(payload.errors)
        }

        return navigate('/login')

    }, [formData])

    const handleHome = useCallback(() => {
        navigate('/home')
    }, [navigate])

    return (
      <WrapperSignUp>
          <div className="signUp">
              <Helmet>
                  <title>Signup</title>
              </Helmet>
              <header className="header">
                  <nav className="nav">
                      <img src={logo} alt="logo"/>
                      <a onClick={handleHome}>
                          <img src={home} alt="home"/>
                          <p>Home</p>
                      </a>
                  </nav>
              </header>

              <div className="signUp_container">
                  <div className="signUp_content">
                      <form onSubmit={handleSubmit} className="signUp__form" method="post">
                          <h1>Sign up</h1>
                          <div className="signUp_input_name">
                              <input type="text"
                                     name="firstname"
                                     placeholder="First name"
                                     value={formData.firstName}
                                     onChange={handleChange("firstName")}
                                     required/>
                              <input type="text"
                                     name="lastname"
                                     id="username"
                                     placeholder="Last name" onChange={handleChange("lastName")}
                                     value={formData.lastName}
                                     required
                              />
                          </div>
                          <div><input className="input"
                                      id="email"
                                      type="email"
                                      placeholder="Email"
                                      onChange={handleChange('email')}
                                      value={formData.email}
                                      required/>
                              {error.email ? <p className="register_error">{error.email}</p> : null}
                          </div>
                          <div><input className="input"
                                      id="password"
                                      type="password"
                                      placeholder="Password"
                                      onChange={handleChange("password")}
                                      value={formData.password}
                                      required/></div>
                          <div className="signUp_label">
                              <input type="checkbox" className="signUp_checkbox" id="scales" name="remember"/>
                              <label htmlFor="scales">Remember me</label>
                          </div>
                          <button type="submit" className="signUp_btn">Sign up</button>
                      </form>
                      <img src={sign_up} alt="sign-up"/>
                  </div>
              </div>


          </div>
      </WrapperSignUp>
    );
}

export default SignUp;