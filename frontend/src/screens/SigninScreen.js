import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register, signin } from "../features/auth/authSlice";
import { toast } from 'react-toastify'

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [biodata, setBiodata] = useState("");
  const [signinEmail, setSignemail] = useState("");
  const [signinPassword, setSignPassword] = useState("");
  const {user, message, isError, isSuccess, isLoading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const redirect = search ? search.split("=")[1] : "";
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    //Handle Submit
    if (password !== confirmpassword) {
      toast.error("Passwords don't match");
    } else {
      const userDetails = {
        email,
        firstname: firstName,
        lastname: lastName,
        username: userName,
        password,
        biodata,
      };
      dispatch(register(userDetails));
    }
  };
  const signinHandler = (e) => {
    e.preventDefault();
    const userDetails = { email: signinEmail, password: signinPassword };
    dispatch(login(userDetails));
  };
  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if (user) {
      navigate({ pathname: `/${redirect}` });
    }
  }, [user, navigate, isError, message, redirect]);

  return (
    <div className="page-wrapper">
      <main className="page-main">
        <div className="section-banner">
          <div className="section-banner__bg signin-banner">
            <div className="uk-container">
              <div className="section-banner__content">
                <div
                  className="uk-grid uk-child-width-auto@m uk-flex-bottom"
                  data-uk-grid
                >
                  <div className="uk-width-expand@m">
                    <div className="section-banner__breadcrumb">
                      <ul className="uk-breadcrumb">
                        <li>
                          <Link to="afripixels-home.html">Home</Link>
                        </li>
                        <li>
                          <span>Sign in</span>
                        </li>
                      </ul>
                    </div>
                    <div className="section-banner__title">
                      Good to have you back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="uk-section-large uk-container signin-content">
            <div className="uk-grid uk-grid-medium" data-uk-grid>
              <div className="uk-width-2-3@m">
                <div
                  className="section-city-place widjet widjet-form"
                  id="add-reviews sign-in"
                >
                  <div className="uk-h3">
                    <span className="icon-diamond"></span>Register
                  </div>
                  <form onSubmit={submitHandler}>
                    <div
                      className="uk-grid uk-grid-medium uk-child-width-1-1"
                      data-uk-grid
                    >
                      <div
                        className="uk-grid uk-grid-small"
                        data-uk-grid="true"
                      >
                        <div className="uk-width-2-3@m uk-first-column">
                          <input
                            className="uk-input"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="uk-width-1-3@m">
                          <input
                            className="uk-input uk-width-1-1"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div
                        className="uk-grid uk-grid-small"
                        data-uk-grid="true"
                      >
                        <div className="uk-width-2-3@m uk-first-column">
                          <input
                            className="uk-input"
                            type="text"
                            name="firstname"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="uk-width-1-3@m">
                          <input
                            className="uk-input uk-width-1-1"
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          className="uk-input"
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="uk-input"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="uk-margin">
                        <textarea
                          className="uk-textarea"
                          rows="5"
                          name="biodata"
                          placeholder="Biodata"
                          onChange={(e) => setBiodata(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className="uk-button uk-button-danger uk-button-large uk-width-1-1"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <br />
                <br />
              </div>
              <div className="uk-width-1-3@m">
                <aside className="sidebar">
                  <div className="widjet widjet-form">
                    <div className="uk-h3">
                      <span className="icon-diamond"></span>Sign In
                    </div>
                    <form onSubmit={signinHandler}>
                      {/* <input
                        type="hidden"
                        name="project_name"
                        value="Ecata - City Portal"
                      />
                      <input
                        type="hidden"
                        name="admin_email"
                        value="chernyh.mihail@gmail.com"
                      />
                      <input
                        type="hidden"
                        name="form_subject"
                        value="Booking Online"
                      /> */}
                      <div className="uk-margin-medium">
                        <input
                          className="uk-input"
                          type="email"
                          name="email"
                          onChange={(e) => setSignemail(e.target.value)}
                          placeholder="Email or Username"
                        />
                      </div>
                      <div className="uk-margin-medium">
                        <input
                          className="uk-input"
                          type="password"
                          name="password"
                          onChange={(e) => setSignPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      {/* <div className="uk-margin-small">
                        <input
                          className="uk-input"
                          type="text"
                          name="Select_Time"
                          placeholder="Select Time"
                        />
                      </div> */}
                      <div className="uk-margin-small">
                        <input
                          className="uk-button uk-button-danger uk-width-1-1"
                          type="submit"
                          value="Sign in"
                        />
                      </div>
                      <div className="uk-margin-small-top uk-text-center">
                        <div className="uk-text-meta">
                          Powered By “Restaurant-Hub”
                        </div>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
      )
    </div>
  );
};

export default SigninScreen;
