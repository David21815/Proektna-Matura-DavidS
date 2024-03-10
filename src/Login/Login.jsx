import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSVG from "./HeroSVG";
import PersonSVG from "./SVGs/PersonSVG";
import EmailSVG from "./SVGs/EmailSVG";
import PasswordSVG from "./SVGs/PasswordSVG";

function Login() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }
    return errors;
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length === 0) {
      navigate("/success");
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#FFFFD2] flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-4xl">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            <HeroSVG />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Најави се</h1>
              <p>Внеси ги своите информации за да се најавиш</p>
            </div>
            <form onSubmit={handleSubmit}>
              {/* First name field */}
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-semibold px-1"
                  >
                    Име
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <PersonSVG />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Име"
                    />
                  </div>
                  {formErrors.firstName && (
                    <p className="text-red-500 text-xs italic">
                      {formErrors.firstName}
                    </p>
                  )}
                </div>
                {/* Last name field */}
                <div className="w-1/2 px-3 mb-5">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-semibold px-1"
                  >
                    Презиме
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <PersonSVG />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Презиме"
                    />
                  </div>
                  {formErrors.lastName && (
                    <p className="text-red-500 text-xs italic">
                      {formErrors.lastName}
                    </p>
                  )}
                </div>
              </div>
              {/* Email field */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <EmailSVG />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="david@example.com"
                    />
                  </div>
                  {formErrors.email && (
                    <p className="text-red-500 text-xs italic">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              {/* Password field */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold px-1"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <PasswordSVG />
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={formValues.password}
                      onChange={handleChange}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                  {formErrors.password && (
                    <p className="text-red-500 text-xs italic">
                      {formErrors.password}
                    </p>
                  )}
                </div>
              </div>
              {/* Submit button */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Најави се
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
