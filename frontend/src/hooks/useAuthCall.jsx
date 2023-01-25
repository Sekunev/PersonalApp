import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

// const BASE_URL = "http://127.0.0.1:8000/";
const BASE_URL = "https://sekune1.pythonanywhere.com/";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState([]);

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      console.log(data);
      localStorage.setItem("isActive", true);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
      dispatch(fetchFail());
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      console.log(data);
      localStorage.setItem("isActive", true);
      dispatch(loginSuccess(userInfo));
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      localStorage.clear();
      navigate("/login");
      dispatch(logoutSuccess());
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  return { login, logout, register, errorMessage };
};

export default useAuthCall;
