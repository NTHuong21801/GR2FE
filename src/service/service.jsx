/* eslint-disable no-unused-vars */

import axios from 'axios';
const api = 'http://dev.techlinkvn.com:8090';
const ApiService = {
  getToken() {
    const token = localStorage.getItem("access_token");
    const configAuth = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    return configAuth;
  },
  getTokenType(file) {
    const token = localStorage.getItem("access_token");
    const configAuth = {
      headers: {
        'Content-Type': file.type,
        'Authorization': `Bearer ${token}`
      }
    }
    return configAuth;
  },
  getTokenJson() {
    const token = localStorage.getItem("access_token");
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
      const response = await axios.get(`${api}/user/get-all-semester`, ApiService.getToken());
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
  async forgotPass(email) {
    try {
      const response = await axios.post(`${api}/api/auth/forgotPass/${email}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async getStudentByMssv(mssv) {
    try {
      const response = await axios.get(`${api}/user/student/get-student-by-mssv/${mssv}`, ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getStudentByTeacher(email) {
    try {
      const response = await axios.get(`${api}/user/teacher/get-student-by-teacher-email/${email}`, ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getStudentByTeacherPaginate(email, page) {
    try {
      const response = await axios.get(`${api}/user/teacher?email=${email}&page=${page}&size=5`, ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async getStudentByTeacherEmail(email) {
    try {
      const response = await axios.get(`${api}/user/teacher/get-student-by-teacher-email/${email}`, ApiService.getToken());
      return response.data;

    } catch (error) {
      console.log(error)
    }
  },
  async getTeacherByAccount(account) {
    try {
      const response = await axios.get(`${api}/user/teacher/get-teacher-by-account/${account}`, ApiService.getToken());
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  async updateStatus(id, status) {
    try {
      const token = localStorage.getItem("access_token");; // Assume this returns the token string
      const response = await axios.post(
        `${api}/user/teacher/updateStatus/${id}?status=${status}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}` // Include the tsoken in the Authorization header
          }
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Rethrow the error to be caught in handleChangeStatus
    }
  },
  async getExcelType(data) {
    try {
      const response = await axios.post(`${api}/user/excel/get-file-by-email-and-type`, data, ApiService.getToken());
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
  async exportEvaluate(data, fileType) {
    try {
      const response = await axios.post(`${api}/user/excel/exportEvaluate/${fileType}`, data, ApiService.getToken());
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
      return error.response.data;
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
  async readFileToDB(file, fileType, mssv) {
    try {
      const response = await axios.post(`${api}/user/excel/readFileDb?fileType=${fileType}&mssv=${mssv}`, file, ApiService.getTokenType(file));
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
  async changePassword(data) {
    try {
      const response = await axios.put(`${api}/user/teacher/change-password`, data, ApiService.getToken());
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async deleteStudent(id) {
    try {
      const token = localStorage.getItem("access_token");;
      const response = await axios.post(
        `${api}/user/teacher/deleteStudent/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  },
  async deleteExcel(id) {
    try {
      const token = localStorage.getItem("access_token");;
      const response = await axios.post(
        `${api}/user/teacher/deleteExcel/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  },
};

export default ApiService;