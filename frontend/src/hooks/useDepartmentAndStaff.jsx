import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://sekune1.pythonanywhere.com";

const useDepartmentAndStaff = () => {
  const [departmentsAndStaff, setDepartmentsAndStaff] = useState([]);
  const [personalInDepartment, setPersonalInDepartment] = useState([]);
  const { name } = useParams();

  const getDepartmentAndStaff = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/`);
      setDepartmentsAndStaff(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPersonalInDepartment = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/department/${name}`);
      setPersonalInDepartment(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getDepartmentAndStaff,
    departmentsAndStaff,
    getPersonalInDepartment,
    personalInDepartment,
  };
};

export default useDepartmentAndStaff;
