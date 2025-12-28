"use client";

import { ImGithub } from "react-icons/im";
import Header from "../components/Header";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const register = async () => {
    setErrors({});

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.issues) {
        setErrors(data.issues);
      }
      return;
    }

    router.push("/login");
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <div className="lg:w-[30%] max-lg:w-[92%] py-12 pb-8 bg-white border-2 border-gray-500 rounded-4xl mx-auto shadow-xl shadow-[#F0B100]">
          <h2 className="text-center pb-4 pt-12 text-4xl font-bold">
            Register
          </h2>

          <div className="flex flex-col gap-6 mx-auto pt-8 pb-6">
            {/* Name */}
            <div className="mx-auto lg:w-[24rem] max-lg:w-[90%]">
              <input
                className="w-full p-3 border-2 border-black text-xl outline-0"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-600 mt-1">{errors.name[0]}</p>
              )}
            </div>

            {/* Email */}
            <div className="mx-auto lg:w-[24rem] max-lg:w-[90%]">
              <input
                className="w-full p-3 border-2 border-black text-xl outline-0"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-600 mt-1">{errors.email[0]}</p>
              )}
            </div>

            {/* Password */}
            <div className="mx-auto lg:w-[24rem] max-lg:w-[90%]">
              <input
                type="password"
                className="w-full p-3 border-2 border-black text-xl outline-0"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-600 mt-1">{errors.password[0]}</p>
              )}
            </div>

            <button
              onClick={register}
              className="h-[4rem] mx-auto cursor-pointer lg:w-[24rem] max-lg:w-[80%] bg-black text-white rounded-2xl text-xl"
            >
              Register
            </button>

            <Link
              className="text-center text-lg hover:text-[#F0B100]"
              href="/login"
            >
              Already have an account? Login
            </Link>

            <div className="text-center pt-4">
              <p className="text-lg">Or use</p>
              <div className="flex justify-center pt-2">
                <ImGithub
                  onClick={() => signIn("github")}
                  className="cursor-pointer w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
