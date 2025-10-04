import Header from "../components/Header";
import SignIn from "../components/sign-in";

const LoginPage = () => {
  return <>
    <Header />
    <div className=''>
      <div className="text-center pt-32">
        <SignIn />
      </div>
    </div>
  </>
}
export default LoginPage;
