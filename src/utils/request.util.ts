import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
});
