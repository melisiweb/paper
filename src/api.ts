import axios, { AxiosError } from "axios";

export const handleRequestError = (e: AxiosError) => {
  console.log(e, "Send error to monitoring tool");

  throw e;
};

const paxios = axios.create({
  timeout: 10000,
});

paxios.interceptors.request.use((request) => {
  // Eventually add necessary headers

  return request;
});

paxios.interceptors.response.use(
  (response) => response,
  (error) => {
    handleRequestError(error);
  }
);

export { paxios };
