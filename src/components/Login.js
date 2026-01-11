import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const name= useRef(null)
  const email= useRef(null)
  const password = useRef(null)

  const handleToggleButton = () => {
    setIsSignUpForm(!isSignUpForm)
    setErrorMessage("")
    if (name.current) name.current.value = "";
  if (email.current) email.current.value = "";
  if (password.current) password.current.value = "";
  }

  const handleSubmitButton = ()=>{
    const message = checkValidData(name.current?.value, email.current?.value, password.current?.value,isSignUpForm)
    setErrorMessage(message)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_large.jpg"
          alt="main-image"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 text-white bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70">
        <h1 className="text-3xl font-bold my-4">{isSignUpForm ? "SignUp" : "Sign In"}</h1>
        {isSignUpForm && (
          <input ref={name}type="text" placeholder='Full Name' className="p-4 my-4 w-full h-12 bg-gray-500" />)}
        <input
          ref= {email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full h-12 bg-gray-500"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full h-12 bg-gray-500"
        />
        <p className="text-red-500 font-bold text-m">{errorMessage}</p>
        <button className="p-4 my-6 w-full bg-red-500 rounded-lg" onClick={handleSubmitButton}>
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-6 cursor-pointer" onClick={handleToggleButton}>
          {isSignUpForm ? "Already have an account? Sign In Now" : "New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
