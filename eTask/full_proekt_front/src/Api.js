import axios from "axios";

const {REACT_APP_API_URL} = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL
})

class Api {

  static login(email, password) {
    return api.post('/users/login', {email, password})
  }

  static createTask(payload) {
    return api.post("/create-task", {payload})
  }
}

export default Api