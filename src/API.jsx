import axios from "axios";

// const SERVER_ADDRESS = "http://0.0.0.0";
const SERVER_ADDRESS = "https://vr-test.vendorobotics.com/v1/";


export const getRequest = (query) => {
  return axios
    .get(`${SERVER_ADDRESS}/qr_code/active`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
