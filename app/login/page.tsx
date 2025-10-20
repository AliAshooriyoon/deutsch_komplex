"use client"
import "./styleLogin.css"
import { ImGithub } from "react-icons/im";
import Header from "../components/Header";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const doLogin = async () => {
    await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
  }
  return <>
    <Header />
    <div className=" flex items-center justify-center w-[100vw] h-[100vh]">
      <div className='w-[30%] h-[40rem] bg-[#555] rounded-4xl mx-auto shadow-xl shadow-[#F0B100]'>
        <div className='login_form_manual'>
          <h2 className="text-center pb-4 pt-12 text-4xl font-bold">Einloggen</h2>
          <div className="flex flex-col gap-8 mx-auto pt-12 pb-6">
            <div className="">
              <div className='userNameBox p-2  h-[6rem] w-[24rem] border-black
              border-2 mx-auto flex flex-col justify-between'>
                <span className="text-lg">E-Mail Addresse </span>
                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="h-[70%] outline-0  text-xl" type='text' />
              </div>
              <div className='userNameBox p-2  h-[6rem] w-[24rem] border-black
              border-b-2 border-r-2 border-l-2 mx-auto flex flex-col justify-between'>
                <span className="text-lg"> Passwort </span>
                <input onChange={(e) => setPassword(e.target.value)} id="email" name="password" className="h-[70%] outline-0  text-xl" type='password' />
              </div>
            </div>
            <div className='text-center flex flex-col justify-between items-center'>
              <Link href="/forgot-password" className="pt-2 text-lg hover:text-[#F0B100]">
                Forgot password?
              </Link>
              <button onClick={doLogin} className="h-[4rem] cursor-pointer hover:rounded-2xl delay-100 w-[24rem] bg-black text-white text-xl" type="button">Einloggen</button>
              <Link className="pt-4 text-lg hover:text-[#F0B100]"
                href={'/register'}>Keinen Konto? anmelden</Link>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className='text-lg'>Oder verwenden Sie </p>
            <div className="flex justify-center pt-2">
              <ImGithub onClick={() => signIn("github")}
                className="cursor-pointer w-10 h-10" /></div>
            {/* <SignIn /> */}
          </div>
        </div>
      </div>
    </div>
  </>
}
export default LoginPage;
