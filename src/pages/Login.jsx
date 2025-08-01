import { useContext, useState } from "react";
import { TemaContext } from "../context/TemaContext";

function Login() {
  const { tema } = useContext(TemaContext);
  const cardColor = tema === "dark" ? "text-bg-dark" : "text-bg-light";
  const textColor = tema === "dark" ? "text-white" : "text-dark";

  const [email, setEmail] = useState("");
  const [password, setPasswn  ord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // sayfa yenilenmez
    // Burada login işlemleri yapılabilir (API çağrısı vs.)
    console.log("Submitted:", { email, password });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <div className={`card mt-5 shadow-sm border rounded ${cardColor}`}>
            <div className="card-body p-4">
              <h2 className={`text-center mb-4 ${textColor}`}>Login</h2>



              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className={`form-label ${textColor}`}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className={`form-label ${textColor}`}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
