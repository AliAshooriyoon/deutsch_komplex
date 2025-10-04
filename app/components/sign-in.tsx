import { signIn } from "@/auth"
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className="py-4 px-5 text-xl bg-stone-800 rounded-2xl cursor-pointer" type="submit">Signin with GitHub</button>
    </form>
  )
} 
