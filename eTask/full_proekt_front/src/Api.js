import axios from "axios";

const {REACT_APP_API_URL} = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL
})

class Api {

  static login(email, password) {
    return api.post('/users/login', {email, password})
  }

  static register(data) {
    return api.post('/users/register', data)
  }


  static createTask(payload) {
    return api.post("/tasks", payload)
  }

  static createCategories(payload) {
    return api.post("/categories", payload)
  }

  static Task(id ){
    return api.get(`/tasks/user/${id}`)
  }
  static Categories(id ){
    return api.get(`/categories/user/${id}`)
  }



}

export default Api