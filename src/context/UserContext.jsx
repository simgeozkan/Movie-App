import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";






export const UserContext = createContext();


export function UserContextProvider({ children }) {

        

    const [user, setUser] = useState(null);// yeni kullanıcı state'i


    const [watchList, setWatchList] = useState([]);


    useEffect(() => {  // sayfanin ilk yuklenmesi islemi

      const auth = getAuth();
    // oturum bilgisi korunur.cunku sayfa her yuklendiginde kullanici alinir.
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {  //auth her degistiginde fonksiyon callback ile tetiklenir


        setUser(currentUser);

        console.log(currentUser.uid);


        if (!currentUser) {
          // 1️⃣ Çıkış yapan kullanıcı için listeyi temizle
          setUser(null);
          setWatchList([]);
          return;
        }



    
        
          const userDocRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userDocRef);  // veritabanindan okuma islemi yapiir


    
          if (docSnap.exists()) {

            setWatchList(docSnap.data().watchList || []); // okuma islemi sonrasi watchlist olusturulur

          } else {

            

            await setDoc(userDocRef, { watchList: [] });// Kullanıcının verisi yoksa boş bir liste oluştur

            setWatchList([]);
          }
        } 
      );
    
      return () => unsubscribe(); // useeffect subscribe fonksiyonu ile dinleyici kaldirir yani auth kaldirirlir
    }, []); // useeffecti tetikleyen baska bir sey yok
 
 

   



async function removeFromWatchList(id)
 {
  const updatedList = watchList.filter(movie => movie.id !== id); // secilen id e esit olmayan filmleri listeler.bu sayede o film listeden silinmis olur

  setWatchList(updatedList);

  if (user) {

    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, { watchList: updatedList }, { merge: true });
  }
}


  async function addToWatchList(movie) {

    const isAlreadyInWatchlist = watchList.some(item => item.id === movie.id);// film listede zaten var mi

    if (!isAlreadyInWatchlist && user) {

      const updatedList = [...watchList, movie];

      setWatchList(updatedList);
  
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { watchList: updatedList }, { merge: true });
    }
  }



  return (
    <UserContext.Provider value={{ watchList,removeFromWatchList,addToWatchList,user, setUser }}>
      {children}
    </UserContext.Provider>
  );




}
