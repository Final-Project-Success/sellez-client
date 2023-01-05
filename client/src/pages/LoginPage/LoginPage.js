import { facebookProvider } from "../../config/auth-sosmed";
import { googleProvider } from "../../config/auth-sosmed";
import socialMediaAuth from "../../sevices/auth";
export default function LoginPage(params) {
  const handleLogin = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <>
      <div>
        <button onClick={() => handleLogin(facebookProvider)}>facebook</button>
        <button onClick={() => handleLogin(googleProvider)}>google</button>
      </div>
    </>
  );
}
