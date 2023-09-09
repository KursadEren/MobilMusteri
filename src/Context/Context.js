import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
   const [Flatlistxy, SetFlatlistxy] = useState(true);

   const updateFlatlistxy= (Flatlistxy1) => {
    SetFlatlistxy(Flatlistxy1);
   }
    const [sayfa, Setsayfa] = useState("");
   
    const updatesayfa= (sayfa) => {
        Setsayfa(sayfa);
   };
   

  // Yeni verileri eklemek için bir fonksiyon tanımlayabilirsiniz


  return (
    <MyContext.Provider value={{ 
        sayfa,
        updatesayfa,

        Flatlistxy,
        updateFlatlistxy
      }}>
      {children}
    </MyContext.Provider>
  );
};