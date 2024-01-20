import React, { useState } from "react"
export const CarritoContexto = React.createContext([])

export default function CarritoContextoProvider({children}){
    const [carTotProd,setCarTotProd] = useState([])

    return{
        <CarritoContexto.Provider value={{carTotProd,setCarTotProd}}>
            {children}
        </CarritoContexto.Provider>
    }

}