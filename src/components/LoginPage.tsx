
import { useAuthContext } from "../context/AuthContext"

const LoginPage = () => {
  const { hola } = useAuthContext();
  return (
    <>
        <h3>Login</h3>
        <span>{hola}</span>
    </>
  )
}

export default LoginPage