/* eslint-disable no-unused-vars */

import axios from 'axios';
const api = 'http://localhost:8090';
const ApiService = {
   getToken(){
    const token =  localStorage.getItem("access_token");
    const configAuth = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    return configAuth;
  },
  getTokenType(file){
    const token =  localStorage.getItem("access_token");
    const configAuth = {
      headers: {
        'Content-Type': file.type,
        'Authorization': `Bearer ${token}`
      }
    }
    return configAuth;
  },
  getTokenJson(){
    const token =  localStorage.getItem("access_token");
    const configAuth = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    return configAuth;
  },
  async getAllChoice() {
    try {
      const response = await axios.get(`${api}/user/get-all-topic`, ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getAllSemester() {
    try {
      const response = await axios.get(`${api}/user/get-all-semester`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async login(data) {
    try {
      const response = await axios.post(`${api}/api/auth/signin`, data);
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async register(data) {
    try {
      const response = await axios.post(`${api}/api/auth/signup`, data);
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getStudentByMssv(mssv) {
    try {
      const response = await axios.get(`${api}/user/student/get-student-by-mssv/${mssv}`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getStudentById(id) {
    try {
      const response = await axios.get(`${api}/user/student/get-student-by-id/${id}`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getStudentByTeacher(email) {
    try {
      const response = await axios.get(`${api}/user/teacher/get-student-by-teacher-email/${email}`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getAllSchool() {
    try {
      const response = await axios.get(`${api}/user/get-all-school`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getAllClass() {
    try {
      const response = await axios.get(`${api}/user/get-all-class`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getMajorBySchoolId(id) {
    try {
      const response = await axios.get(`${api}/user/get-major-by-school-id/${id}`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async updateTeacherInfo(data) {
    try {
      const response = await axios.post(`${api}/user/teacher/updateInfo`, data,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async updateStudentInfo(data) {
    try {
      const response = await axios.post(`${api}/user/student/updateInfo`, data,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getAllTeacher() {
    try {
      const response = await axios.get(`${api}/user/get-all-teacher`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getClassByMajorId(id) {
    try {
      const response = await axios.get(`${api}/user/get-class-by-major-id/${id}`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getStudentByTeacherEmail(email) {
    try {
      const response = await axios.get(`${api}/user/teacher/get-student-by-teacher-email/${email}`,  ApiService.getToken());
      return response.data;

    } catch (error) {
      console.log(error)
    }
  },
  async getTeacherByAccount(account) {
    try {
      const response = await axios.get(`${api}/user/teacher/get-teacher-by-account/${account}`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async generateFileUrl() {
    try {
      const response = await axios.get(`${api}/user/generate-upload-url?type=xlsx`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getFileUrl(file) {
    try {
      const response = await axios.post(`${api}/user/uploadFile`, file, ApiService.getTokenType(file));
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async createFile(data) {
    try {
      const response = await axios.post(`${api}/user/excel/create`, data,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getExcelType(data) {
    try {
      const response = await axios.post(`${api}/user/excel/get-file-by-email-and-type`, data,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getExcelByAccount() {
    try {
      const response = await axios.get(`${api}/user/excel/get-file-by-account`,  ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getRefreshToken(data) {
    try {
      const response = await axios.post(`${api}/api/auth/refresh-token`, data);
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async exportEvaluate(data) {
    try {
      const response = await axios.post(`${api}/user/excel/exportEvaluate`, data, ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async readFileUpload(file) {
    try {
      const response = await axios.post(`${api}/user/excel/readFile`, file, ApiService.getTokenType(file));
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async writeDataToFile(file) {
    try {
      const response = await axios.post(`${api}/user/excel/writeFile`, file, ApiService.getTokenType(file));
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async writeDataToListFile(data) {
    try {
      const response = await axios.post(`${api}/user/excel/listDSSV`, data, ApiService.getTokenJson());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async readFileToDB(file, fileType) {
    try {
      const response = await axios.post(`${api}/user/excel/readFileDb?fileType=${fileType}`, file, ApiService.getTokenType(file));
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async readListFileAndStoreDB(file) {
    try {
      const response = await axios.post(`${api}/user/excel/readFileAndStoreDB`, file, ApiService.getTokenType(file));
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};

export default ApiService;