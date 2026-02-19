"use client"
import { LuMail } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Account = () => {
  const user = useSession();
  const [name, setName] = useState(["", ""])
  const [mail, setMail] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const usr: string = user.data?.user?.name
    if (user.status == "authenticated") {
      console.log(usr)
      setName([usr.split(" ")[0], usr.split(" ")[1]])

    }
    setMail(user.data?.user?.email)
  }, [user])
  const changeData = async () => {
    // console.log(name.join("").split(" "))
    setLoading(true)
    console.log(name)
    console.log(user.status)
    console.log(name.join(" "))
    const req = await fetch("/api/changeName", {
      method: "PUT", body: JSON.stringify({
        name: name.join(" ")
      })
    })
    // const data = await req.json()
    if (req.ok) {
      setLoading(false)
      signOut({ callbackUrl: "/login" })
    }
  }
  // {user.data?.user?.name}
  return <>
    <div className='flex lg:px-18 flex-col lg:h-full w-full lg:justify-between items-center max-lg:max-w-[90%]
      max-lg:mx-auto'>
      <div className="flex items-center h-full max-lg:flex-col gap-12 text-center
        lg:justify-center">
        <div className="flex max-lg:w-full  h-full items-center person_avatar_box p-6 bg-white gap-4
          justify-between flex-col border-2 border-gray-500 rounded-2xl">
          <div>
            <div className="lg:w-36 lg:h-36 py-12 px-14 rounded-full bg-gradient-to-r
              from-red-700 to-amber-500 flex items-center m-6 justify-center">
              <p className="text-6xl text-white">{user.data?.user?.name[0]}</p>
            </div>
            <div className="flex gap-1 flex-col">
              <p className="text-3xl"> {user.data?.user?.name} </p>
              <p className="text-xl text-gray-800"> {user.data?.user?.email} </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div className="lg:w-96 bg-red-500 p-1.5 bg-gradient-to-r
           from-red-700 to-amber-500 rounded-xl cursor-pointer">Profilbild ändern</div>
            <div className="lg:w-96 bg-gray-500 p-1.5 cursor-pointer rounded-xl">Passwort ändern</div>
          </div>
        </div>
        <div className="border-2 h-full border-gray-500 flex flex-col justify-around flex-wrap person_avatar_box 
          bg-white rounded-xl py-8 max-lg:w-[90%]">
          <p className=" py-2 text-xl">Persönliche Dateien</p>
          <div className="p-4 flex flex-col justify-around gap-12">
            <div className="names_box flex gap-8 max-lg:flex-wrap">
              <div className="names flex gap-8 max-lg:flex-wrap">
                <label className="flex w-full max-lg:w-[90%] gap-1 items-start flex-col" form="">
                  <span className="">Vorname</span>
                  <div className="flex w-full items-center item_pr_dark gap-2 bg-gray-200 indent-2 px-4 py-1.5
                    text-lg rounded-xl outline-0">
                    <span className="text-gray-500"> <FaUser /> </span>
                    <input onChange={(e) => setName(prev => [e.target.value, prev[1]])}
                      value={name[0]} className="item_pr_dark outline-0 w-full" type="text" />
                  </div>
                </label>
                <div className="name_l w-full">
                  <label className="flex w-full max-lg:w-[90%] gap-1 items-start flex-col" form="">
                    <span className="">Nachname</span>
                    <div className="flex w-full items-center item_pr_dark gap-2 bg-gray-200 indent-2 px-4 py-1.5
                    text-lg rounded-xl outline-0">
                      <span className="text-gray-500"> <FaUser /> </span>
                      <input onChange={(e) => setName(prev => [prev[0], e.target.value])}
                        value={name[1]}
                        className="item_pr_dark outline-0 w-full" type="text" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mail_box">
              <label className="flex w-full max-lg:w-[90%] gap-1 items-start flex-col" form="">
                <span className="">E-Mail</span>
                <div className="flex w-full items-center gap-2 item_pr_dark bg-gray-200 indent-2 px-4 py-1.5
                    text-lg rounded-xl outline-0">
                  <span className="text-gray-500"> <LuMail /> </span>
                  <input disabled value={mail} className="item_pr_dark outline-0 w-full text-gray-500"
                    type="email" />
                </div>
              </label>
            </div>
            <div className="phone_box">
              <label className="flex w-full max-lg:w-[90%] gap-1 items-start flex-col" form="">
                <span className="">Telefon</span>
                <div className="flex w-full items-center gap-2 item_pr_dark bg-gray-200 indent-2 px-4 py-1.5
                    text-lg rounded-xl outline-0">
                  <span className="text-gray-500"> <FaPhone /> </span>
                  <input className="outline-0 w-full item_pr_dark" type="number" />
                </div>
              </label>
            </div>
            <div className="address_box">
              <label className="flex w-full max-lg:w-[90%] gap-1 items-start flex-col" form="">
                <span className="">Adresse</span>
                <div className="flex w-full items-center gap-2 bg-gray-200 item_pr_dark indent-2 px-4 py-1.5
                    text-lg rounded-xl outline-0">
                  <span className="text-gray-500"> <IoLocationSharp /> </span>
                  <input className="outline-0 w-full item_pr_dark" type="text" />
                </div>
              </label>
            </div>
            <div className="btn_box flex items-center justify-between px-2 gap-4 max-lg:flex-wrap max-lg:flex-col">
              <div onClick={() => changeData()} className="bg-gradient-to-r from-red-500 to-amber-500
               py-2 px-4 rounded-2xl text-white w-[85%] font-bold cursor-pointer
                hover:from-red-600 hover:to-amber-600">
                {!loading ? `Änderung speichern` : `Loading...`}
              </div>
              <div className="py-2 px-4 rounded-2xl cancel_btn_dark text-white bg-gray-800 cursor-pointer">Abbrechen</div>
            </div>
            <p className="text-xl text-red-600 warn_edit">Sie werden nach jeder Änderung abgemeldet!</p>
          </div>
        </div>
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
