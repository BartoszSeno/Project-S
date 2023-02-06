import { useRef, useState, useEffect } from "react";
import apiRequest from "./register/apiRequest";
import LoginForm from "./register/login/login";
import "./register/register.css";
import App from "./App";
import RegisterForm from "./register/register/registerForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./news/news.js";
import ScrollToTop from "./news/components/scrollToTop";
import Shop from "./shop/shop.js";

function Register({ test }) {
  const inputRef = useRef();
  const API_URL =
    "https://my-json-server.typicode.com/BartoszSeno/jsonapi-user/register";
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const registerItems = await response.json();
        console.log(registerItems);
        setItems(registerItems);
      } catch (err) {}
    };
    fetchItems();
  }, []);
  //=========//Adding Items//=========//
  const addItem = async (login) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, login, email, password };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
  };

  //=========//Login//=========//
  const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [validtest, setvalidtest] = useState("");

  useEffect(() => {
    const validtest = user;
    if (!validtest) {
    }
  });

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
  }, [user]);

  const Logincheck = async () => {
    const val = document.querySelector("#userlogin").value;

    for (let i = 0; i < data.length; i++) {
      //========wartość inputa = wartość JSON========\\
      if (val == data[i].login) {
        document.querySelector("#uidnote").innerHTML = "Login is already taken";
        setLogincheckk(false);
        break;
        //========puste pole inputa========\\
      } else if (val.length == 0) {
        document.querySelector("#uidnote").innerHTML = "Invalid format";
        setLogincheckk(false);
        break;
        //========niewystarczajaca liczba znakow========\\
      } else if (val.length < 4) {
        document.querySelector("#uidnote").innerHTML =
          "Login must have more than 3 characters";
        setLogincheckk(false);
        break;
        //========gdy wszystko sie zgadza========\\
      } else if (val.length >= 4) {
        document.querySelector("#uidnote").innerHTML = "";
        setLogincheckk(true);
      }
    }
  };
  //=========//Email//=========//
  //const EMAIL_REGEX = /^[A-z][A-z0-9-_](?=.*[.@.]).{8,24}$/;
  const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+.[a-z].{8,24}$/;

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validtestEmail, setValidtestEmail] = useState("");

  useEffect(() => {
    const validtestEmail = email;
    if (!validtestEmail) {
    }
  });

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const EmailCheck = async () => {
    const val = document.querySelector("#email").value;
    const fgasf = /^[A-z][A-z0-9-_](?=.*[@]).{3,100}$/;

    for (let i = 0; i < data.length; i++) {
      //========wartość inputa = wartość JSON========\\
      if (val == data[i].email) {
        document.querySelector("#uidnoteemail").innerHTML = "Email in use";
        setEmailcheck(false);
        break;
        //========puste pole inputa========\\
      } else if (val.length == 0) {
        document.querySelector("#uidnoteemail").innerHTML = "Invalid format";
        setEmailcheck(false);
        break;
        //========niewystarczajaca liczba znakow========\\
      } else if (fgasf.test(val)) {
        document.querySelector("#uidnoteemail").innerHTML = "";
        setEmailcheck(true);
        //========gdy wszystko sie zgadza========\\
      } else {
        document.querySelector("#uidnoteemail").innerHTML =
          "Enter a valid email";
        setEmailcheck(false);
        break;
      }
    }
  };
  //=========//Password//=========//
  const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState("");

  useEffect(() => {
    const passwordFocus = password;
    if (!passwordFocus) {
    }
  });

  useEffect(() => {
    const matchFocus = matchPassword;
    if (!matchFocus) {
    }
  });

  const PasswordCheck = async () => {
    const valPass = document.querySelector("#password").value;
    const passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    for (let i = 0; i < data.length; i++) {
      if (valPass.length == 0) {
        document.querySelector("#uidnotepass").innerHTML = "Invalid format";
        setPasscheck(false);
        break;
      } else if (passCheck.test(valPass)) {
        document.querySelector("#uidnotepass").innerHTML = "";
        setPasscheck(true);
        break;
      } else {
        document.querySelector("#uidnotepass").innerHTML =
          "The password must contain a capital letter, a special character and must be at least 8 characters long";
        setPasscheck(false);
        break;
      }
    }
  };
  //=========//Password Match//=========//
  const [matchPassword, setmatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState("");

  useEffect(() => {
    setValidPassword(PASS_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  //=========//Submit//=========//
  const [newItem, setNewItem] = useState("");
  const [newItemEmail, setNewItemEmail] = useState("");
  const [newItempassword, setNewItempassword] = useState("");
  const [newItempasswordmatch, setNewItemPasswordMatch] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    setSuccess(true);
    if (!newItemEmail) return;
    addItem(newItemEmail);
    setNewItemEmail("");
    if (!newItempassword) return;
    addItem(newItempassword);
    setNewItempassword("");
    if (!newItempasswordmatch) return;
    addItem(newItempasswordmatch);
    setNewItemPasswordMatch("");
    const v1 = USER_REGEX.test(user);
    const v2 = PASS_REGEX.test(password);
    if (!v1 || !v2) return;
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  //=========//Test//=========//

  const [data, setData] = useState([]);
  const [Logincheckk, setLogincheckk] = useState(false);
  const [Emailcheck, setEmailcheck] = useState(false);
  const [Passcheck, setPasscheck] = useState(false);
  const [PassCheckcheck, setPassCheckcheck] = useState(false);

  const getData = () => {
    fetch(`${API_URL}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const PasswordMatchCheck = async () => {
    const valPassMach = document.querySelector("#passwordMatch").value;
    const valPass = document.querySelector("#password").value;

    for (let i = 0; i < data.length; i++) {
      if (valPassMach == valPass) {
        document.querySelector("#uidnotepassmatchs").innerHTML = "";
        setPassCheckcheck(true);
        break;
      } else if (valPassMach.length == 0) {
        document.querySelector("#uidnotepassmatchs").innerHTML =
          "Invalid format";
        setPassCheckcheck(false);
        break;
      } else {
        document.querySelector("#uidnotepassmatchs").innerHTML =
          "Passwords are not the same";
        setPassCheckcheck(false);
        break;
      }
    }
  };

  const [LogincheckAv, setLogincheckAv] = useState(false);
  const [PassAv, setPassAv] = useState(false);

  const loginLoginAv = async () => {
    const valAv = document.querySelector("#userlogin").value;
    const ghfdsgafd = document.querySelector(".gowqno");

    for (let s = 0; s < data.length; s++) {
      if (valAv == data[s].login) {
        document.querySelector("#uidnote").innerHTML = "";
        setLogincheckAv(true);
        console.log(data[s].id);
        ghfdsgafd.innerHTML = data[s].id;
        break;
      } else {
        document.querySelector("#uidnote").innerHTML = "Enter Login";
        setLogincheckAv(false);
      }
    }
  };

  const passPassAv = async () => {
    const passAv = document.querySelector("#password").value;
    const dfghjkl = document.querySelector(".gowqno").innerHTML;

    for (let s = 0; s < data.length; s++) {
      const ffasdf = dfghjkl - 1;
      if (passAv == data[ffasdf].password) {
        document.querySelector("#uidnote").innerHTML = "";
        setPassAv(true);
        console.log("tak");
        break;
      } else {
        document.querySelector("#uidnote").innerHTML = "Enter password";
        setPassAv(false);
      }
    }
  };

  return (
    <>
      <BrowserRouter basename="/Project-S">
        <ScrollToTop />
        <Routes>
          <Route
            path="/register"
            element={
              <RegisterForm
                Logincheckk={Logincheckk}
                Emailcheck={Emailcheck}
                Passcheck={Passcheck}
                PassCheckcheck={PassCheckcheck}
                PasswordMatchCheck={PasswordMatchCheck}
                PasswordCheck={PasswordCheck}
                EmailCheck={EmailCheck}
                Logincheck={Logincheck}
                success={success}
                password={password}
                email={email}
                handleSubmit={handleSubmit}
                setvalidtest={setvalidtest}
                user={user}
                newItem={newItem}
                setUser={setUser}
                setNewItem={setNewItem}
                validUser={validUser}
                validtest={validtest}
                setValidtestEmail={setValidtestEmail}
                setEmail={setEmail}
                setNewItemEmail={setNewItemEmail}
                validEmail={validEmail}
                validtestEmail={validtestEmail}
                setPasswordFocus={setPasswordFocus}
                setPassword={setPassword}
                setNewItempassword={setNewItempassword}
                validPassword={validPassword}
                passwordFocus={passwordFocus}
                setMatchFocus={setMatchFocus}
                matchPassword={matchPassword}
                setmatchPassword={setmatchPassword}
                setNewItemPasswordMatch={setNewItemPasswordMatch}
                validMatch={validMatch}
                matchFocus={matchFocus}
                inputRef={inputRef}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginForm
                handleSubmitLogin={handleSubmitLogin}
                PassAv={PassAv}
                passPassAv={passPassAv}
                LogincheckAv={LogincheckAv}
                loginLoginAv={loginLoginAv}
                Logincheckk={Logincheckk}
                Emailcheck={Emailcheck}
                Passcheck={Passcheck}
                PassCheckcheck={PassCheckcheck}
                PasswordMatchCheck={PasswordMatchCheck}
                PasswordCheck={PasswordCheck}
                EmailCheck={EmailCheck}
                Logincheck={Logincheck}
                success={success}
                password={password}
                setvalidtest={setvalidtest}
                user={user}
                newItem={newItem}
                setUser={setUser}
                setNewItem={setNewItem}
                validUser={validUser}
                validtest={validtest}
                setPasswordFocus={setPasswordFocus}
                setPassword={setPassword}
                setNewItempassword={setNewItempassword}
                validPassword={validPassword}
                passwordFocus={passwordFocus}
                inputRef={inputRef}
                data={data}
                items={items}
              />
            }
          />
          <Route path="/" element={<App />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Register;
