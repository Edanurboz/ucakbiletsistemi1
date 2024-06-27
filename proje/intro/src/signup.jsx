import React ,{useState}from "react";
import './css/signup.css'
import { Link } from "react-router-dom";
import {auth} from './firebase' 
import { createUserWithEmailAndPassword } from "firebase/auth";



const SignUpForm=()=>{
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      console.log("hesap olusturuldu")
      setMessage("Hesap oluşturuldu. Giriş yap'a tıklayın");

    }catch(err){
      console.log(err)
      setMessage("Hesap oluşturulamadı. Lütfen tekrar deneyin.");
    }
  }
  
  return(
    <div className="signup-container">
      <form className="form-control" onSubmit={handleSubmit}>
        <h2>Kayıt Ol</h2>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <label htmlFor="password">
          Şifre:
          <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
        </label>
       
        <button  type='submit' >Kayıt Ol</button> <br/>
        <p>Zaten üye misiniz? <Link to= "/login">Giriş Yap</Link></p>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
export default SignUpForm