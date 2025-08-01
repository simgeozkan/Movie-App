import { createContext, useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



export const TemaContext = createContext(); // Global bir alan tanimlandi.istedigimiz content icerisinden erisebiliriz.







export function TemaContextProvider({children}){

  const storedTema=localStorage.getItem("tema");

  const initialTema=storedTema? JSON.parse(storedTema):"light";

  const [tema, setTema] = useState(initialTema);

    // useEffect ile temayi localStorage'dan yükle
   



    useEffect(() => {
      localStorage.setItem("tema", JSON.stringify(tema));
    }, [tema]);




    return(
        <TemaContext.Provider value={{tema,setTema}}>   {/* themeContext e erisebilen tum componenetler bu value yada erisebilir.*/}
        {children}
      </TemaContext.Provider>
    )
}






