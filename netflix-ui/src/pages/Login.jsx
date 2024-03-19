import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";

export default function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSignin = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    }
    catch (error) {
      console.log(error);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  })
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header signup />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input type="email" name="email" value={formValues.email} placeholder="email" onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
              <input type="password" name="password" value={formValues.password} placeholder="password" onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
              <button onClick={handleSignin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
};
const Container = styled.div`

  position:relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    .form-container {
      gap:2rem;
      height:85vh;
      .form{
        padding: 2rem;
        background-color: #000000b0;
        width:25vw;
        gap:2rem;
        color:white;
        .container {
          gap: 2rem;
          input{
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border:none;
            cursor: pointer;
            color:white;
            font-weight:bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }

`;
