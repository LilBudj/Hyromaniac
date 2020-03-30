import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.amplitude.com/2/httpapi'
});
const APIKey = '29a7f14698a3dc6e0d2ee5ef3992f72c';

const eventConstructor = (name) => {
    return {
        "api_key": APIKey,

        "events": {
            "device_id": "C8F9E604-F01A-4BD9-95C6-8E5357DF265D",
            "event_type": name,
        }
    }
};

export const eventAPI = {
  mountEvent(event){
      instance.post('', eventConstructor(event)).then(response => {
          return response
      })
  },
  clickEvent(event){
      instance.post('', eventConstructor(event)).then(response => {
          return response
      })
  }
};