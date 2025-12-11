"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

const Account = () => {
  const user = useSession();
  console.log(user)

  return <>
    <div className=''>
      <div className="max-lg:flex flex-col items-center gap-12">
        <p className='user text-3xl text-center'>Hallo {user.data?.user?.name}!</p>
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
