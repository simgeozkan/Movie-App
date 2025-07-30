import { createContext} from 'react';




export const TemaContext = createContext(); // Global bir alan tanimlandi.istedigimiz content icerisinden erisebiliriz.




export function TemaProvider({children}){
    return(
        <TemaContext.Provider value={{tema:"dark"}}>   {/* themeContext e erisebilen tum componenetler bu value yada erisebilir.*/}
        {children}
      </TemaContext.Provider>
    )
}






