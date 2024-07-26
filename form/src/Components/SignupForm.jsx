import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;

  const addUserData = props.addUserData;
  const addAdminData = props.addAdminData;

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("user");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData(
      (prevData) => {
        return {
          ...prevData,
          [event.target.name]: event.target.value,
        } 
      }
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if(accountType === "user") {
      addUserData((prevData) => {
        return {
          ...prevData,
          formData
        }
      })
    }
    else if(accountType === "admin") {
      addAdminData((prevData) => {
        return {
          ...prevData,
          formData
        }
      })
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    
    console.log("Printing the form data")
    const finalAccountData = {
      ...formData,
      accountType
    }

    console.log(finalAccountData);

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mt-6 mb-9 border-b border-b-gray-600">
        <button
          onClick={() => setAccountType("user")}
          className={`${
            accountType === "user"
              ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          User
        </button>
        
        <button
          onClick={() => setAccountType("admin")}
          className={`${
            accountType === "admin"
              ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Admin
        </button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-y-5 mt-6">
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter first name"
              onChange={changeHandler}
              value={FormData.firstName}
              name="firstName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b border-b-gray-600"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter last name"
              onChange={changeHandler}
              value={FormData.lastName}
              name="lastName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b border-b-gray-600"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b border-b-gray-600"
            name="email"
          />
        </label>

        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b border-b-gray-600"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10">
              {
                showCreatePass ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
              }
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b border-b-gray-600"
            />

            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10">
              {
                showConfirmPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
              }
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
