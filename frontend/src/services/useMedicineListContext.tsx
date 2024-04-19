import { useContext } from "react";
import { MedicineListContext } from '../context/medicineListContext';

 const  useMedicineListContext = ()=> {
    const context = useContext(MedicineListContext);

    if (!context) throw new Error("Nao esta dentro do Contexto!");

    return context;
}

export default useMedicineListContext;