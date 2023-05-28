import axios from "axios";

export const $user = axios.create({baseURL: 'http://localhost/api/'})
