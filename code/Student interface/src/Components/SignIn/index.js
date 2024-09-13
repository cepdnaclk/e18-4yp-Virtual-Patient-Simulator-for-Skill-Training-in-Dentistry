import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { UserActions } from "../../Actions/User/UserActions";
import Swal from "sweetalert2";
import CaseSelect from "../UI/CaseSelect";
import img3 from "../../Images/UI_BackGround.jpg";
import { TimeActions } from "../../Actions/Time/TimeActions.js";

function SignIn() {
  const [user, setUser] = useState({});
  const isSignIn = useSelector((state) => state.user.isSignIn);
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT Id token" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject.email.length);
    var text = userObject.email;
    if (text.match("pdn.ac.lk")) {
      setUser(userObject);
      localStorage.setItem("user", JSON.stringify(userObject));
      dispatch(UserActions.getCurrentUserDetails(userObject));
      dispatch(TimeActions.setStartTime());
      const signInDiv = document.getElementById("signInDiv");
      if (signInDiv) {
        signInDiv.hidden = true; // Hide the sign-in button after successful login
      }
    } else {
      showAlert();
    }
  }

  function showAlert() {
    Swal.fire({
      title: "Login Failed",
      text: "Use your Dental student account to ",
      icon: "fail",
      confirmButtonText: "OK",
    });
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userObject = JSON.parse(savedUser);
      setUser(userObject);
      dispatch(UserActions.getCurrentUserDetails(userObject));
    } else {
      const signInDiv = document.getElementById("signInDiv");
      if (signInDiv) {
        signInDiv.hidden = false; // Ensure the sign-in button is visible if no user is logged in
      }
    }

    /*global google*/
    google.accounts.id.initialize({
      client_id:
        // "943712076133-fq8m71b1trdlhs6sgvhubp8nhla5pnel.apps.googleusercontent.com",
        "784867083454-spuacei6js25fji5ibsr5vn3cevr88gf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "extra-large",
    });
    google.accounts.id.prompt();
  }, []);

  if (Object.keys(user).length === 0 || !isSignIn) {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(${img3})`,
          height: "100vh",
          marginTop: "0px",
          fontSize: "18px",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div className="header">
          <h1>Virtual Patient Simulator</h1>
          <h2>for Skill Training in Dentistry </h2>
        </div>
        <div className="authent">
          <Button className="relative" id="signInDiv" variant="light"></Button>
          <p id="errorM"></p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <CaseSelect />
      </div>
    );
  }
}

export default SignIn;
