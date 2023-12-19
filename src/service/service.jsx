
import axios from 'axios';

const ApiService = {
  async getAllChoice() {
    try {
      const response = await axios.get('http://localhost:2111/admin/choice/getAll');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllSemester() {
    try {
      const response = await axios.get('http://localhost:2111/admin/semester/getAll');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default ApiService;