import React, { FC, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isEmail } from "../../../utils/regular";
import { AuthType } from "../../../utils/types";
import { $user } from "../../../http";
import axios from "axios";

const LogForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let correctEmail: boolean = isEmail.test(email);

  const sendLog = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const response = { username, email, password };
    try {
      const { data } = await $user.post(
        "auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(data.message)
      console.log(data.token.split('|')[1])
      localStorage.setItem('token', data.token)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message", error.message);
        return error.message;
      } else {
        console.log("unexpected error", error);
        return "An unexpected error occured";
      }
    }
  };

  return (
    <div>
      <Form className="form__container">
        <h1>Вход</h1>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inp__username"
            type="text"
            placeholder="Enter username"
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inp__email"
            type="email"
            placeholder="Enter email"
          />
          {correctEmail ? (
            <div style={{ color: "green" }}>this email is correct</div>
          ) : (
            <div style={{ color: "#ED1D24" }}>incorrect email</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inp__password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="btn__container">
          <Button variant="primary" type="submit" onClick={(e) => sendLog(e)} style={{ border: "none" }}>
            Войти
          </Button>
        </div>
        <div className="login__link">
          Нету аккаунта ? - &nbsp;
          <Link to="/main/registration">нажмите для регистрации</Link>
        </div>
      </Form>
    </div>
  );
};

export default LogForm;
