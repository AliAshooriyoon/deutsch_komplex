"use client"
import { signOut, useSession } from "next-auth/react";

const Account = () => {
  const user = useSession();
  console.log(user)
  const logOutAction = () => {
    signOut({ callbackUrl: "/login" })
  }
  return <>
    <div className=''>
      <div className="">
        <p className='user text-3xl text-center'>Hallo {user.data?.user?.name}!</p>
        <button onClick={() => logOutAction()}
          className='rounded-2xl py-3 px-7 text-2xl bg-red-700 border-2 cursor-pointer'>SignOut</button>
      </div>
      <div className="py-10 px-4 text-xl">
        Hast du jede Probleme ?
        <p>Gib uns Bescheid über dein Problem!</p>
        <span className="text-cyan-600">aliashooriyoon@yahoo.com</span>
      </div>
    </div>
  </>
}
export default Account;
