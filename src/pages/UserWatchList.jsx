import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import WatchList from "../components/WatchList";

function UserWatchList() {


    // Bu fonksiyon, kullanıcının izleme listesini göstermek için kullanılacak.
    // UserContext'ten watchList ve removeFromWatchList fonksiyonunu alalım.
    // import { useContext } from 'react';
    // import { UserContext } from '../context/UserContext';
    // import { Link } from 'react-router-dom';

    const { watchList,removeFromWatchList} = useContext(UserContext);

    
        return (

        <WatchList 

            movies={watchList} 
            title="WatchList" 
            removeFromWatchList={removeFromWatchList} 
        />
        
    )
}

export default UserWatchList;
