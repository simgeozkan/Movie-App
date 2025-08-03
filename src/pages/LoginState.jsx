import { useContext, useState } from "react";
import { TemaContext } from "../context/TemaContext";
import Input from "../components/input";
import useInput from "../hooks/useInput";
import {validateEmail,validateMinLength,isNotEmpty} from "../utils/validations";
import { loginWithGoogle } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';



function LoginState() {

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { tema } = useContext(TemaContext);
  const cardColor = tema === "dark" ? "text-bg-dark" : "text-bg-light";
  const textColor = tema === "dark" ? "text-white" : "text-dark";

 
  const handleGoogleLogin = async () => {
    try {
      const loggedUser = await loginWithGoogle();
      setUser(loggedUser);  // kullanıcı bilgisini context'e kaydet
      console.log("Google ile giriş başarılı:", loggedUser.email);
      navigate("/movies");
      // Yönlendirme veya kullanıcı durumu güncelleme
    } catch (error) {
      alert("Google ile girişte hata: " + error.message);
    }
  };
  


  // useInput hook'unu email ve password için ayrı ayrı kullan


  const {value: email,handleInputChange:handleEmailChange,handleInputBlur:handleEmailBlur, hasError:emailHasError} = useInput("",(value)=>validateEmail(value)&& isNotEmpty(value));

  const {value: password,handleInputChange: handlePasswordChange,handleInputBlur: handlePasswordBlur, hasError:passwordHasError} = useInput("",(value)=>validateMinLength(value,6));

 

 
  const handleSubmit =async (e) => {  //form submit edildiginde sayfa yenilenmesin diye e.preventDefault() kullandik
    e.preventDefault(); 
    setAuthError("");  // önce önceki hatayı temizle

    if (!emailHasError && !passwordHasError) {
      try {
        const user = await login(email, password);
        console.log("Giriş başarılı:", user);
        // TODO: Giriş sonrası yönlendirme yapabilirsin
      } catch (error) {
        setAuthError(error.message);
      }
    } else {
      setAuthError("Please fix validation errors before submitting.");
    }
  };



  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <div className={`card mt-5 shadow-sm border rounded ${cardColor}`}>
            <div className="card-body p-4">
              <h2 className={`text-center mb-4 ${textColor}`}>Login</h2>
              


              <form onSubmit={handleSubmit} noValidate>



                <Input 
                id="email"
                labelText="email"
                error={emailHasError &&"Enter a valid E-mail"}
                type="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                
                />
                

                <Input 
                id="password"
                labelText="password"
                error={passwordHasError &&"min 5 character"}
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                
                />


                

              
                <div className="d-grid">
                  <button type="submit" className="btn btn-secondary" >
                    Login
                  </button>



                  <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="btn btn-secondary w-100 mt-3"
                    >
                 Google ile Giriş Yap
               </button>



                </div>
              </form>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginState;
