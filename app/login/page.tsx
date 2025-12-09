"use client"
import { ImGithub } from "react-icons/im";
import Header from "../components/Header";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const doLogin = async () => {
    setIsLoading(true)
    await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
    setIsLoading(false)
  }
  return <>
    <Header />
    <div className=" flex items-center justify-center w-[100vw] h-[100vh]">
      <div className='lg:w-[30%]  pb-8 max-lg:w-[92%] py-12 bg-white border-2 border-gray-400
        rounded-4xl mx-auto shadow-xl shadow-[#F0B100]'>
        <div className='login_form_manual'>
          <h2 className="text-center pb-4 pt-12 text-4xl font-bold">Einloggen</h2>
          <div className="flex flex-col gap-8 mx-auto pt-12 pb-6">
            <div className="">
              <div className='userNameBox p-2  h-[6rem] lg:w-[24rem] max-lg:w-[90%] border-black
              border-2 mx-auto flex flex-col justify-between'>
                <span className="text-lg">E-Mail Addresse </span>
                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="h-[70%] outline-0  text-xl" type='text' />
              </div>
              <div className='userNameBox p-2  h-[6rem] lg:w-[24rem] max-lg:w-[90%] border-black
              border-b-2 border-r-2 border-l-2 mx-auto flex flex-col justify-between'>
                <span className="text-lg"> Passwort </span>
                <input onChange={(e) => setPassword(e.target.value)} id="email" name="password" className="h-[70%] outline-0  text-xl" type='password' />
              </div>
            </div>
            <div className='text-center flex flex-col justify-between items-center'>
              <Link href="/forgot-password" className="pt-2 text-lg hover:text-[#F0B100]">
                Forgot password?
              </Link>
              {!isLoading ? <button onClick={doLogin}
                className="h-[4rem] cursor-pointer hover:rounded-2xl delay-100
                lg:w-[24rem] max-lg:w-[80%] max-lg:rounded-2xl bg-black text-white text-xl" type="button">Einloggen</button>
                : <button className="h-[4rem] cursor-pointer hover:rounded-2xl delay-100
                lg:w-[24rem] max-lg:w-[80%] max-lg:rounded-2xl bg-gray-400/80 text-white text-xl" type="button">Loading...</button>}
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
