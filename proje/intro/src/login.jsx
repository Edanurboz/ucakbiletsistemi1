import React, { useState } from "react";
import './css/signup.css'
import { Link,useNavigate } from "react-router-dom";
import { auth } from './firebase'
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Giriş Başarılı")
      navigate('/booking');
    } catch (err) {
      console.log(err)
      setMessage("Hesap bilgileri yanlış.");
    }
  }
  return (
    <div className="login-container">
      <form className="form-control" onSubmit={handleSubmit}>
        <h2>Giriş Yap</h2>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Şifre:
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type='submit' >Giriş Yap</button> <br />
        <p>Hesabınız Yok Mu?  <Link to="/">Kayıt Ol</Link></p>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
export default Login