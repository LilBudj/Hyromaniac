import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.amplitude.com/httpapi'
});
const APIKey = '29a7f14698a3dc6e0d2ee5ef3992f72c';
const secretKey = '202a69b2dc6f1687700227df81ab2e2d';
const projectId = '268470';

export const eventAPI = {
  mountEvent(){

  }
};