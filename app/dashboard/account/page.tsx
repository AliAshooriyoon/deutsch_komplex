"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Account = () => {
  const user = useSession();
  console.log(user)
  const logOutAction = () => {
    signOut({ callbackUrl: "/login" })
  }
  return <>
    <div className=''>
      <div className="max-lg:flex flex-col items-center gap-12">
        <p className='user text-3xl text-center'>Hallo {user.data?.user?.name}!</p>
        <button onClick={() => logOutAction()}
          className='rounded-2xl max-lg:w-[50%] py-3 px-7 text-2xl 
          bg-red-700 border-2 cursor-pointer'>SignOut</button>
      </div>
      <div className="py-10 px-4 text-xl">
        Hast du jede Probleme ?
        <p>Gib uns Bescheid über dein Problem!</p>
        <Link href={"mailto:aliashooriyoon@yahoo.com"} className="text-cyan-600">
          aliashooriyoon@yahoo.com</Link>
      </div>
    </div>
  </>
}
export default Account;
