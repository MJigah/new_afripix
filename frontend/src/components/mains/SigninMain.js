import React from 'react'

const SigninMain = () => {
    return (
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
                          <a href="afripixels-home.html">Home</a>
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
                    <span className="icon-diamond"></span>Sign In
                  </div>
                  <form>
                    <div
                      className="uk-grid uk-grid-medium uk-child-width-1-1"
                      data-uk-grid
                    >
                      <div>
                        <input
                          className="uk-input"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="uk-input"
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div>
                        <label>
                          <input
                            className="uk-checkbox"
                            type="checkbox"
                            checked
                          />
                          <span className="uk-margin-small-center">
                            Save my name and email details for future use
                          </span>
                        </label>
                      </div>
                      <div>
                        <button
                          className="uk-button uk-button-danger uk-button-large"
                          type="submit"
                        >
                          Sign In
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
                    <h4 className="widjet__title">Booking Online</h4>
                    <form>
                      <input
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
                      />
                      <div className="uk-margin-small">
                        <input
                          className="uk-input"
                          type="text"
                          name="No._of_Guests"
                          placeholder="No. of Guests"
                        />
                      </div>
                      <div className="uk-margin-small">
                        <input
                          className="uk-input"
                          type="text"
                          name="Select_Date"
                          placeholder="Select Date"
                        />
                      </div>
                      <div className="uk-margin-small">
                        <input
                          className="uk-input"
                          type="text"
                          name="Select_Time"
                          placeholder="Select Time"
                        />
                      </div>
                      <div className="uk-margin-small">
                        <input
                          className="uk-button uk-button-danger uk-width-1-1"
                          type="submit"
                          value="Book Online"
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
}

export default SigninMain
