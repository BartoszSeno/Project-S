import "../register.css";
import { Link } from "react-router-dom";
import LoginClickIcon from "../infromation/loginIinforamtion/loginIconClick";

function LoginForm({
  setvalidtest,
  user,
  newItem,
  setUser,
  setNewItem,
  validUser,
  validtest,
  setPasswordFocus,
  setPassword,
  setNewItempassword,
  passwordFocus,
  validPassword,
  inputRef,
  password,
  success,
  setSuccess,
  data,
  EmailCheck,
  PasswordCheck,
  PasswordMatchCheck,
  Logincheckk,
  Emailcheck,
  Passcheck,
  PassCheckcheck,
  loginLoginAv,
  LogincheckAv,
  passPassAv,
  PassAv,
  handleSubmitLogin,
}) {
  return (
    <>
      {success ? (
        <section className="section">
          <h1>Success!</h1>
        </section>
      ) : (
        <section className="cointeinerLogin">
          <div>
            <Link className="logo" to="/">
              Project S
            </Link>
          </div>
          <LoginClickIcon />
          <form onSubmit={handleSubmitLogin} className="loginBox">
            {/*=========//Login//=========*/}
            <div className="Login_Box">
              <label htmlFor="username" className="titleLabelLogin">
                Login
              </label>
              <br />
              <input
                onClick={setvalidtest}
                type="text"
                id="userlogin"
                autoComplete="off"
                required
                aria-describedby="uidnote"
                value={user && newItem}
                onChange={(e) => {
                  setUser(e.target.value);
                  setNewItem(e.target.value);
                  loginLoginAv();
                }}
                aria-invalid={validtest ? "false" : ""}
                className={validtest && !LogincheckAv ? "testone" : "testtwo"}
              />
              <p
                id="uidnote"
                className={
                  validtest && !LogincheckAv ? "instructions" : "offscreen"
                }
              >
                Podaj Login
              </p>
            </div>
            {/*=========//PASSWORD//=========*/}
            <div className="password">
              <label htmlFor="password" className="titleLabelLogin">
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  setNewItempassword(e.target.value);
                  passPassAv();
                }}
                aria-invalid={PassAv ? "false" : ""}
                className={passwordFocus && !PassAv ? "testone" : "testtwo"}
              />
              <p
                id="uidnote"
                className={
                  passwordFocus && !PassAv ? "instructions" : "offscreen"
                }
              >
                Podaj Hasło
              </p>
            </div>
            {/*=========//BUTTON//=========*/}
            <button
              className="buttonlogin"
              disabled={!PassAv || !LogincheckAv ? true : false}
              aria-label="Add Item"
            >
              Sign In
            </button>
            <div className="gowqno"></div>
          </form>
          <div className="lgaccLogin">
            <p>have'nt account ?</p>
            <p>
              <Link className="here" to="/register">
                Register here
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default LoginForm;
