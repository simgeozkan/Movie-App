function Input({id,labelText,error,...props})
{
    return(
        <div className="mb-3">
            
        <label htmlFor={id} className={`form-label `}>
         {labelText}
        </label>

        <input id={id}   className={`form-control ${error ? "is-invalid" : ""}`} {...props}  />

        {error && (<div className="invalid-feedback d-block">{error}</div>)}
     

      </div>
    )
}
export default Input;