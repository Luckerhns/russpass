import axios from "axios";
import React, {
  ChangeEvent,
  FC,
  FormEvent,
  MouseEventHandler,
  useState,
} from "react";
import { Button, Form } from "react-bootstrap";
import { AuthType } from "../../../utils/types";
import { $user } from "../../../http";
import { RouteEnums } from "../../../utils/routes";
import { Link } from "react-router-dom";
import { isEmail } from "../../../utils/regular";
import "./AuthPage.css";

const RegForm: FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let password_c = password

  let correctEmail: boolean = isEmail.test(email);

  const sendReg = async (
    e: FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      const {data} = await $user.post(
        'auth/register',
        { phone, email, password, password_c },
        );
      console.log(data.data.message)
      localStorage.setItem('token', data.data.token.split('|')[1])
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
    <div className="">
      <Form className="form__container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1>Регистрация</h1>
          <br />
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            className="inp__phone phone"
            type="phone"
            placeholder="Enter phone"
          />
          <br />
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            className="inp__username"
            type="text"
            placeholder="Enter username"
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="inp__password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="btn__container">
          <Button
            onClick={(e) => sendReg(e)}
            variant="primary"
            type="submit"
            style={{ border: "none" }}
          >
            Зарегистрироваться
          </Button>
        </div>
        <div className="login__link">
          Уже есть аккаунт ? - &nbsp;
          <Link to={RouteEnums.LoginRoute}>нажмите для входа</Link>
        </div>
      </Form>
    </div>
  );
};

export default RegForm;
