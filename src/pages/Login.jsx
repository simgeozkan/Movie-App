import { useContext, useRef, useState } from "react";
import { TemaContext } from "../context/TemaContext";

function Login() {
  const { tema } = useContext(TemaContext);
  const cardColor = tema === "dark" ? "text-bg-dark" : "text-bg-light";
  const textColor = tema === "dark" ? "text-white" : "text-dark";



const email=useRef();
const password =useRef();

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);



  const handleSubmit = (e) => {  //form submit edildiginde sayfa yenilenmesin diye e.preventDefault() kullandik
    e.preventDefault(); 

    setIsEmailValid(true);
    setIsPasswordValid(true);

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    

    if (!emailValue.includes("@")) {
      
      alert("Lütfen geçerli bir email adresi giriniz. Email '@' içermelidir.");
      setIsEmailValid(false);
    
      return;
    }

    if (passwordValue.length < 5) {
      alert("Parola en az 5 karakter olmalıdır.");
      setIsPasswordValid(false);
      return;
    }

    const emailVal=email.current.value="";
    const passlVal=password.current.value="";

    setIsEmailValid(true);
    setIsPasswordValid(true);
  
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <div className={`card mt-5 shadow-sm border rounded ${cardColor}`}>
            <div className="card-body p-4">
              <h2 className={`text-center mb-4 ${textColor}`}>Login</h2>
              


              <form onSubmit={handleSubmit} noValidate>



                
                
                <div className="mb-3">
                  <label htmlFor="email" className={`form-label ${textColor}`}>
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    ref={email}
                  />
                 
                {!isEmailValid && (
                    <div className="invalid-feedback d-block">
                      Enter a valid E-mail
                      
                    </div>
                  )}
               

                </div>


                <div className="mb-3">
                  <label htmlFor="password" className={`form-label ${textColor}`}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    ref={password}
                  />

                {!isPasswordValid && (
                  <div className="invalid-feedback d-block">
                    Enter a valid Password
                   
                  </div>

                )}
                </div>
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

export default Login;
