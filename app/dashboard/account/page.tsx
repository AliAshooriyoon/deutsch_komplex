"use client"
import { signOut, useSession } from "next-auth/react";

const Account = () => {
  const user = useSession()
  const logOutAction = () => {
    signOut({ callbackUrl: "/login" })
  }
  return <>
    <div className=''>
      <div className="">
        <p className='user text-3xl text-center'>{user.data?.user?.name}</p>
        <button onClick={() => logOutAction()} className='rounded-2xl py-2 px-4 border-2 cursor-pointer'>SignOut</button>
      </div>
    </div>
  </>
}
export default Account;
