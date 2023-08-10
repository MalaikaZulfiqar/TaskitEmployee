import axios from 'axios';
const FormData = require('form-data')
const API_BASE_URL = 'https://locatestudent.com/taskit/api.php';

export const employee_login = async (email, password) => {
  try {
    let data = new FormData();
    data.append('type', 'employee_login');
    data.append('email', email);
    data.append('password', password);

    const response = await axios.post(API_BASE_URL,
      data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    );
    console.log(" calling...")
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log("server responded");
    } else if (error.request) {
      console.log("network error");
    } else {
      console.log(error);
    }
  };
}

export const get_employee_booking = async (uid) => {
  try {
    let data = new FormData();
    data.append('type', 'get_data');
    data.append('table_name', 'assign_booking');
    data.append('employee_id', uid);

    const response = await axios.post(API_BASE_URL,
      data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    );
    return response.data;
  }
  catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log("server responded");
    } else if (error.request) {
      console.log("network error");
    } else {
      console.log(error);
    }
  };
}

export const update_status = async (bookigId, status) => {
  let data = new FormData();
  data.append('type', 'update_data');
  data.append('table_name', 'booking');
  data.append('id', bookigId);
  data.append('status', status);
  try {
    const response = await axios.post(API_BASE_URL,
      data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    );
    return response.data;
  }
  catch (error) {
    console.error('Error in getting booking:', error);
    throw error;
  }
}