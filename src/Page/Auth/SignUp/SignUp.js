import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupCover from "../../../img/cover/signupCover.jpg";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Spinner/Spinner";

const SignUp = () => {
  const navigate = useNavigate();
  const [passError, setPassError] = useState("");

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleSignupWithEmail = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const confirmPass = e.target.confirmPass.value;
    if (pass === confirmPass) {
      await createUserWithEmailAndPassword(email, pass);
      setPassError("");
      e.target.reset();
    } else {
      setPassError("The password and confirmation password did not match.");
    }
  };

  if (googleUser || emailUser) {
    navigate("/");
  }

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-28">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(${signupCover})`,
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center mb-5">
                Create an Account with <span className="italic">!</span>
              </h3>

              <div className="flex gap-4 item-center justify-center">
                {/* google button */}
                <button
                  onClick={() => signInWithGoogle()}
                  type="button"
                  className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full "
                >
                  {/* google logo */}
                  {googleLoading ? (
                    <Loading />
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                    </svg>
                  )}
                </button>
              </div>
              {googleError && (
                <p className="text-red-500 text-center mt-4">
                  {googleError.message}
                </p>
              )}

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  or
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <form
                onSubmit={handleSignupWithEmail}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                {
                  <div className="md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className={`block mb-2 text-sm font-bold ${
                          passError ? "text-red-500" : "text-gray-700"
                        }`}
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight ${
                          passError && "bg-red-200"
                        } text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                        id="pass"
                        type="password"
                        placeholder="******************"
                        required
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className={`block mb-2 text-sm font-bold ${
                          passError ? "text-red-500" : "text-gray-700"
                        }`}
                        htmlFor="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight ${
                          passError && "bg-red-200"
                        }  text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                        id="confirmPass"
                        type="password"
                        placeholder="******************"
                        required
                      />
                    </div>
                  </div>
                }
                <p className="text-red-600 text-center mt-2">{passError}</p>
                <div className="mb-6 text-center">
                  <button
                    className="w-full mt-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {emailLoading ? <Loading /> : <p>Signup Account</p>}
                  </button>
                </div>
                {emailError && (
                  <p className="text-red-500 text-center">
                    {emailError.message}
                  </p>
                )}

                <hr className="mb-6 border-t" />

                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/signin"
                  >
                    Already have an account? Sign in.
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
