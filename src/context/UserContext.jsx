import { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {

        



    const [watchList, setWatchList] = useState(() => {

        const storedWatchList = localStorage.getItem("watchList");
        return storedWatchList ? JSON.parse(storedWatchList) : [];
    });


    

    // useEffect ile temayi localStorage'dan yükle
   

    useEffect(() => {
    // watchList her değiştiğinde localStorage'a kaydet.
    localStorage.setItem("watchList", JSON.stringify(watchList));
}, [watchList]);





  const removeFromWatchList = (id) => {
    setWatchList(prevList => prevList.filter(movie => movie.id !== id));
  };



  function addToWatchList(movie) {
    const isAlreadyInWatchlist = watchList.some(watchList=> watchList.id === movie.id);// movie.id ye esit bir id var mi watchlistte kontrol eder

    if (!isAlreadyInWatchlist) {
      setWatchList(prevWatchlist => [...prevWatchlist, movie]); // yoksa bu filmi eski izleme listesinin ustune kaydeder.set eder ve watchliste gonderir
    }
  }



  return (
    <UserContext.Provider value={{ watchList,removeFromWatchList,addToWatchList}}>
      {children}
    </UserContext.Provider>
  );




}
