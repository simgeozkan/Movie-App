import React from "react";

function Errormessage({ message = "Bir hata oluştu. Lütfen tekrar deneyin." }) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {message}
      </div>
    );
  }
  

export default Errormessage;
