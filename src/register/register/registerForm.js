import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RegisterForm({
  handleSubmit,
  setvalidtest,
  user,
  newItem,
  setUser,
  setNewItem,
  validUser,
  validtest,
  setValidtestEmail,
  setEmail,
  setNewItemEmail,
  validEmail,
  validtestEmail,
  setPasswordFocus,
  setPassword,
  setNewItempassword,
  passwordFocus,
  setMatchFocus,
  matchPassword,
  setmatchPassword,
  setNewItemPasswordMatch,
  validMatch,
  validPassword,
  matchFocus,
  inputRef,
  email,
  password,
  Logincheck,
  success,
  EmailCheck,
  PasswordCheck,
  PasswordMatchCheck,
  Logincheckk,
  Emailcheck,
  Passcheck,
  PassCheckcheck,
}) {
  return (
    <>
      {success ? (
        <section className="section">
          <h1>Success!</h1>
        </section>
      ) : (
        <section className="cointeiner">
          <div>
            <Link className="logo lgreg" to="/">
              Project S
            </Link>
          </div>
          <video
            width="1900"
            muted="muted"
            preload="none"
            loop="loop"
            data-resize="true"
            autoplay=""
            class="on"
            className="movie_register"
          >
            <source
              src="https://cdn-animation.artstation.com/p/video_sources/000/355/564/maleficent-clip001.mp4"
              type="video/mp4"
              className="movie_register2"
            ></source>
          </video>
          <form onSubmit={handleSubmit} className="formBox">
            {/*=========//Login//=========*/}
            <div className="Login_Box">
              <label htmlFor="username" className="titleLabel">
                Login
              </label>
              <br />
              <input
                onClick={setvalidtest}
                maxLength="24"
                minLength="4"
                type="text"
                id="userlogin"
                autoComplete="off"
                required
                aria-describedby="uidnote"
                value={user && newItem}
                aria-invalid={validtest ? "false" : ""}
                onChange={(e) => {
                  setUser(e.target.value);
                  setNewItem(e.target.value);
                  Logincheck();
                }}
                className={validtest && !Logincheckk ? "testone" : "testtwo"}
              />
              <p
                id="uidnote"
                className={
                  validtest && !Logincheckk ? "instructions" : "offscreen"
                }
              >
                Nipoprawny format
              </p>
            </div>
            {/*=========//EMAIL//=========*/}

            <div className="email">
              <label htmlFor="email" className="titleLabel ema">
                Email
              </label>
              <br />
              <input
                onClick={setValidtestEmail}
                type="email"
                id="email"
                autoComplete="off"
                required
                aria-describedby="uidnoteemail"
                value={email}
                aria-invalid={Emailcheck ? "false" : ""}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setNewItemEmail(e.target.value);
                  EmailCheck();
                }}
                className={
                  validtestEmail && !Emailcheck ? "testone" : "testtwo"
                }
              />
              <p
                id="uidnoteemail"
                className={
                  validtestEmail && !Emailcheck ? "instructions" : "offscreen"
                }
              >
                Nipoprawny format
              </p>
            </div>
            {/*=========//PASSWORD//=========*/}
            <div className="password">
              <label htmlFor="password" className="titleLabel psw">
                Password
              </label>
              <br />
              <input
                onClick={setPasswordFocus}
                type="password"
                id="password"
                autoComplete="off"
                required
                aria-describedby="uidnote"
                value={password}
                aria-invalid={Passcheck ? "false" : ""}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setNewItempassword(e.target.value);
                  PasswordCheck();
                }}
                className={passwordFocus && !Passcheck ? "testone" : "testtwo"}
              />
              <p
                id="uidnotepass"
                className={
                  passwordFocus && !Passcheck ? "instructions" : "offscreen"
                }
              >
                Hasło Wymagane
              </p>
            </div>
            {/*=========//PASSWORD MATCH//=========*/}
            <div className="passwordMatch">
              <label htmlFor="passwordMatch" className="titleLabel cfp">
                Confirm Password
              </label>
              <br />
              <input
                onClick={setMatchFocus}
                type="password"
                id="passwordMatch"
                autoComplete="off"
                required
                aria-describedby="uidnote"
                value={matchPassword}
                aria-invalid={PassCheckcheck ? "false" : ""}
                onChange={(e) => {
                  setmatchPassword(e.target.value);
                  setNewItemPasswordMatch(e.target.value);
                  PasswordMatchCheck();
                }}
                className={
                  matchFocus && !PassCheckcheck ? "testone" : "testtwo"
                }
              />
              <p
                id="uidnotepassmatchs"
                className={
                  matchFocus && !PassCheckcheck ? "instructions" : "offscreen"
                }
              >
                Password not Match
              </p>
            </div>

            {/*=========//BUTTON//=========*/}
            <button
              className="buttonlogin"
              disabled={
                !Logincheckk || !Emailcheck || !Passcheck || !PassCheckcheck
                  ? true
                  : false
              }
              type="submit"
              aria-label="Add Item"
            >
              Sign In
            </button>
          </form>
          <div className="bgBox"></div>
        </section>
      )}
      <div className="lgacc">
        <p>have account ?</p>
        <p>
          <Link className="here" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegisterForm;
