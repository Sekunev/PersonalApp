import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuthCall from "../hooks/useAuthCall";
import { Link } from "react-router-dom";

const registerSchema = yup.object().shape({
  username: yup.string().required("* Please enter an username"),
  // email: yup
  //   .string()
  //   .email("Please enter valid email")
  //   .required("Please enter an email"),
  password: yup
    .string()
    .min(8, "* Password must have min 8 chars")
    .max(16, "* Password must have max 16 chars")
    .required("* Please enter a password"),
  // .matches(/\d+/, "Password must have a number")
  // .matches(/[a-z]+/, "Password must have a lowercase")
  // .matches(/[A-Z]+/, "Password must have a uppercase")
  // .matches(/[!,?{}><%&$#£+-.]+/, "Password must have a special chars"),
  // first_name: yup.string().required("Please enter a First Name"),

  // last_name: yup.string().required("Please enter a Last Name"),
});

const Login = () => {
  const { login, errorMessage } = useAuthCall();
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      // console.log(values);
      login(values);
      action.resetForm();
    },
  });
  return (
    <div className="flex justify-center items-center flex-col mt-[10%]">
      <h1 className="font-bold text-2xl">Login</h1>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6 relative">
              <input
                type="text"
                className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={values.username}
              />
              <p className="absolute text-xs text-red-700 top-[40px]">
                {errors.username || ""}
              </p>
            </div>
          </div>
          <div className="form-group mb-6 relative">
            <input
              type="password"
              className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <p className="absolute text-xs text-red-700 top-[40px]">
              {errors.password || ""}
            </p>
          </div>
          {errorMessage?.non_field_errors && (
            <h3 className="font-sekune text-center m-4">
              {errorMessage.non_field_errors}
            </h3>
          )}

          <button
            type="submit"
            className="
w-full
px-6
py-2.5
bg-[#ffb600]
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-[#ff7300] hover:shadow-lg
focus:bg-[#ff3300] focus:shadow-lg focus:outline-none focus:ring-0
active:bg-[#ff1100] active:shadow-lg
transition
duration-150
ease-in-out"
          >
            Sign in
          </button>
          <Link to="/register">
            <button
              type="submit"
              className="mt-2
w-full
px-6
py-2.5
bg-[#ff8806]
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-[#ffd106] hover:shadow-lg
focus:bg-[#ff6106] focus:shadow-lg focus:outline-none focus:ring-0
active:bg-[#ff4006] active:shadow-lg
transition
duration-150
ease-in-out"
            >
              Dont you have an account ? Sing up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
