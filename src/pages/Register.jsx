import { useContext, useRef, useState } from "react";
import { TemaContext } from "../context/TemaContext";

function Register() {
  const { tema } = useContext(TemaContext);
  const cardColor = tema === "dark" ? "text-bg-dark" : "text-bg-light";
  const textColor = tema === "dark" ? "text-white" : "text-dark";







  const handleSubmit = (e) => {  //form submit edildiginde sayfa yenilenmesin diye e.preventDefault() kullandik
    e.preventDefault();
    
    const formData=new FormData(e.target);
    const hobbies=formData.getAll("hobbies");
    const data=Object.fromEntries(formData.entries());
    data.hobbies=hobbies;
    console.log(data);




  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <div className={`card mt-5 shadow-sm border rounded ${cardColor}`}>
            <div className="card-body p-4">
              <h2 className={`text-center mb-4 ${textColor}`}>Register</h2>



              <form onSubmit={handleSubmit}>



                <div className="mb-3">

                  <label htmlFor="name" className={`form-label ${textColor}`}>
                    name
                  </label>
                  <input
                    type="name"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="name"

                  />


                  <label htmlFor="email" className={`form-label ${textColor}`}>
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"

                  />
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

                  />

                  <label htmlFor="repassword" className={`form-label ${textColor}`}>
                    RePassword
                  </label>
                  <input
                    type="password"
                    name="repassword"
                    className="form-control"
                    id="repassword"
                    placeholder="rePassword"

                  />


                  <div className="mb-3">
                    <label className={`form-label ${textColor}`}>Hobbies</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobby1"
                        value="Reading Books"
                      />
                      <label className={`form-check-label ${textColor}`} htmlFor="hobby1">
                        Reading Books
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobby2"
                        value="Swimming"
                      />
                      <label className={`form-check-label ${textColor}`} htmlFor="hobby2">
                        Swimming
                      </label>
                    </div>


                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobby3"
                        value="Listening to Music"
                      />
                      <label className={`form-check-label ${textColor}`} htmlFor="hobby3">
                        Listening to Music
                      </label>
                    </div>


                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="hobby4"
                        value="Traveling"
                      />
                      <label className={`form-check-label ${textColor}`} htmlFor="hobby4">
                        Traveling
                      </label>
                    </div>
                  </div>



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

export default Register;
