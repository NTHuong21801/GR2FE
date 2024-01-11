/* eslint-disable no-unused-vars */

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
      const response = await axios.post('http://localhost:8090/api/auth/signup', data, configHeader);
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
  },
  async getStudentById(id){
    try{
      const response = await axios.get(`http://localhost:8090/user/student/get-student-by-id/${id}`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getStudentByTeacher(email){
    try{
      const response = await axios.get(`http://localhost:8090/user/teacher/get-student-by-teacher-email/${email}`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllSchool(){
    try{
      const response = await axios.get(`http://localhost:8090/user/get-all-school`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllClass(){
    try{
      const response = await axios.get(`http://localhost:8090/user/get-all-class`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getMajorBySchoolId(id){
    try{
      const response = await axios.get(`http://localhost:8090/user/get-major-by-school-id/${id}`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async updateTeacherInfo(data){
    try{
      const response = await axios.post('http://localhost:8090/user/teacher/updateInfo', data, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async updateStudentInfo(data){
    try{
      const response = await axios.post('http://localhost:8090/user/student/updateInfo', data, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllTeacher(){
    try{
      const response = await axios.get(`http://localhost:8090/user/get-all-teacher`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getClassByMajorId(id){
    try{
      const response = await axios.get(`http://localhost:8090/user/get-class-by-major-id/${id}`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getStudentByTeacherEmail(email){
    try{
      const response = await axios.get(`http://localhost:8090/user/teacher/get-student-by-teacher-email/${email}`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async generateFileUrl(){
    try{
      const response = await axios.get(`http://localhost:8090/user/generate-upload-url?type=xlsx`, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async getFileUrl(file){
    try{
      const response = await axios.post(`http://localhost:8090/user/uploadFile`, file, {headers: {
        'Content-Type': file.type,
        'Authorization':`Bearer ${token}`
      }});
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
  async createFile(data){
    try{
      const response = await axios.post('http://localhost:8090/user/excel/create', data, configAuth);
      return response.data;
    }catch (error) {
      throw new Error(error.message);
    }
  },
};

export default ApiService;