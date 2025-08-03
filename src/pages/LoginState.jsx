import { useContext, useState } from "react";
import { TemaContext } from "../context/TemaContext";
import Input from "../components/input";
import useInput from "../hooks/useInput";
import {validateEmail,validateMinLength,isNotEmpty} from "../utils/validations";



function LoginState() {
  const { tema } = useContext(TemaContext);
  const cardColor = tema === "dark" ? "text-bg-dark" : "text-bg-light";
  const textColor = tema === "dark" ? "text-white" : "text-dark";

 

  


  // useInput hook'unu email ve password için ayrı ayrı kullan


  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError:emailHasError,
  } = useInput("",(value)=>validateEmail(value)&& isNotEmpty(value));

  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError:passwordHasError,
  } = useInput("",(value)=>validateMinLength(value,6));

 

 
  const handleSubmit = (e) => {  //form submit edildiginde sayfa yenilenmesin diye e.preventDefault() kullandik
    e.preventDefault(); 
    if (!emailHasError && !passwordHasError) {
      console.log("email:", email, "password:", password);
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
