
import axios from 'axios';
const token = localStorage.getItem("access_token");
const config = {
  headers: {
    'Content-type':"application/json",
    'Authorization':`Bearer + ${token}`
  }
}
const configNonAuth = {
  headers: {
    'Content-type':"application/json"
  }
}
const ApiService = {
  async getAllChoice() {
    try {
      const response = await axios.get('http://localhost:8080/user/get-all-topic');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllSemester() {
    try {
      const response = await axios.get('http://localhost:8080/user/get-all-semester');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async login(data){
    try{
      const response = await axios.post('http://localhost:8080/user/login', data, configNonAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async register(data){
    try{
      const response = await axios.post('http://localhost:8080/user/register', data, configNonAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  }
};

export default ApiService;