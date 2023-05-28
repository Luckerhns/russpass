import { IRoute } from "./types";
import Tours from "../pages/Tours";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegistrationPage from "../pages/AuthPage/RegistrationPage";
import FavoriteTours from "../pages/FavoriteTours";
import Catalog from "../pages/Catalog";
import Anketa from "../pages/Anketa";

export enum RouteEnums {
  MainRoute = "/",
  AllToursRoute = "/main/tours",
  LoginRoute = "/main/login",
  RegistrationRoute = "/main/registration",
  ProfileFavoriteRoute = "/main/profile/favorites",
  AnketaRoute = "/main/anketa",
  CreateUserRoute = 'http://localhost/api/auth/registr',
  LoginUserRoute = 'http://localhost/api/auth/login'
}

export const publicRoutes: IRoute[] = [
  { path: RouteEnums.MainRoute, element: Catalog },
  { path: RouteEnums.AllToursRoute, element: Tours },
  { path: RouteEnums.LoginRoute, element: LoginPage },
  { path: RouteEnums.RegistrationRoute, element: RegistrationPage },
  { path: RouteEnums.ProfileFavoriteRoute, element: FavoriteTours },
  { path: RouteEnums.AnketaRoute, element: Anketa },
];
