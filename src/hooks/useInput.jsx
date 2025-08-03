import { useState } from "react";




function useInput(initialValue,validationFn) {  // disardan hook a bir ilk deger gonderiyoruz,bu null bir deger oluyor.


  const [value, setValue] = useState(initialValue);  // inputun degeri nedir ?

  const [isEdited, setIsEdited] = useState(false); // duzenlendi mi ona bakiyoruz baslangicta kullanici duzenlemedi varsayiyoruz

  const isValid=validationFn(value); // fonksiyon true degerini gonderdiyse e-mail bos degil ve yazim hatasi yok demektir bu d valid oldugunu gosterir yani bu deger true alir- ya da tam tersi gecerlidir

  

  
  function handleInputBlur(){ // kullanici input a focuslandiysa duzenleme moduna gecmis demektir bu degeri true ya cekeriz
  
    setIsEdited(true);
  };




  const handleInputChange = (e) => { // eger inputta degisiklik oluyorsa bu degisiklikleri yani input value degerini cekip setvalue yarsimiyla yeni value degeroini olustururuz
    setValue(e.target.value);
    
    
  };



  return {   // bu hook cagrilan ve kullanilan yere asagidaki sonuclari isleyip gonderir.
    value,  // setvalue ile value degeri alindi
    handleInputChange, 
    handleInputBlur,
    hasError : isEdited && !isValid, // hata icin eger inputta duzenleme yapildi ve sonuc validasyon kurallarina uygun degilse yani false dondu ise bunun tersini al ve haserrror u true olarak geri yolla
  };
}

export default useInput;
