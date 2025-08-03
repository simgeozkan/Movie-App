import { useState } from "react";




function useInput(initialValue,validationFn) {


  const [value, setValue] = useState(initialValue);

  const [isEdited, setIsEdited] = useState(false);

  const isValid=validationFn(value);

  

  
  function handleInputBlur(){
  
    setIsEdited(true);
  };




  const handleInputChange = (e) => {
    setValue(e.target.value);
    
    
  };

  return {
    value,
    setValue,
    isEdited,
    setIsEdited,
    handleInputChange,
    handleInputBlur,
    hasError : isEdited && !isValid,
  };
}

export default useInput;
