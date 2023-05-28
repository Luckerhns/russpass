import { ComponentType } from "react";

export interface IRoute {
  path: string;
  element: ComponentType;
}

export interface IRegUser {
  telephone: string;
  username: string;
  email: string;
  password: string;
}

export interface ILogUser {
  username: string;
  email: string;
  password: string;
}

export type AuthType = IRegUser | ILogUser;
