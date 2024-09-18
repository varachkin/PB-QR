import axios from "axios";

// const SERVER_ADDRESS = "http://0.0.0.0";
const SERVER_ADDRESS = "http://ec2-18-219-228-246.us-east-2.compute.amazonaws.com:6012/v1/";


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
