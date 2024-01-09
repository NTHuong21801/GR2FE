
import axios from 'axios';
const token = localStorage.getItem("access_token");
const config = {
  headers: {
    'Content-type':"application/json",
    'Authorization':`Bearer ${token}`
  }
}
const configAuth = {
  headers: {
    'Authorization':`Bearer ${token}`
  }
}
const configHeader = {
  headers: {
    'Content-type':"application/json"
  }
}
const ApiService = {
  async getAllChoice() {
    try {
      const response = await axios.get('http://localhost:8090/user/get-all-topic', configAuth);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllSemester() {
    try {
      const response = await axios.get('http://localhost:8090/user/get-all-semester', configAuth);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async login(data){
    try{
      const response = await axios.post('http://localhost:8090/api/auth/signin', data, configHeader);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async register(data){
    try{
      const response = await axios.post('http://localhost:8090/user/register', data, configHeader);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getStudentByMssv(mssv){
    try{
      const response = await axios.get(`http://localhost:8090/user/student/get-student-by-mssv/${mssv}`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  }
};

export default ApiService;