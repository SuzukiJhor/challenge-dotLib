import React, { useEffect, useState } from "react";
import { MedicineListContext } from './medicineListContext';
import useRequest from '../services/useRequest';

export default function MedicineProvider({ children }) {
  const [medicineData, setMedicineData] = useState([]);
  const { data } = useRequest();

  useEffect(() => {
    if (data && data.length > 0) {
      setMedicineData(data);
    }
  }, [data]);

  return (
    <MedicineListContext.Provider value={{ data: medicineData, setMedicineData }}>
      {children}
    </MedicineListContext.Provider>
  );
}