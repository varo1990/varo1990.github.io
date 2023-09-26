import axios from "axios";

const api = axios.create({
  baseURL: "https://content.guardianapis.com",
});



const key = 'ba24a2f9-c46e-4aec-9b80-6af36b4ff711'
class Api {

    static getNewsSearch(params) {
      params["api-key"] = key
      return api.get('/search',  { params: params }  )
    }



}

export default Api;


