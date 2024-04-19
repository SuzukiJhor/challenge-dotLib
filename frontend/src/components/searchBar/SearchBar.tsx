
import React, { useState } from 'react';
import { IconSearch } from '../icons/IconSearch';

import "../../styles/components/searchBar.sass"
import useMedicineListContext from '../../services/useMedicineListContext';
import useRequest from '../../services/useRequest';

const SearchBar = () => {
  const {  setMedicineData } = useMedicineListContext();
  const { data } = useRequest();
  const [filter, setFilter] = useState("");

  const handleChangeInput = (event)=>{
    
    const filterValue = event.target.value;
  
    setFilter(filterValue);
    const filteredData = data.filter((item)=> item.name.toLowerCase().includes(filterValue.toLowerCase()))
  
    setMedicineData(filteredData)
  }

  return (
      <section id="searchBar">
        <div className="search-container">
          <input
            type="text"
            value={filter}
            onChange={handleChangeInput}
            placeholder="Digite o nome do medicamento ou laboratório"
          />
          <button> <IconSearch /></button>
        </div>

      </section>
  );
};

export default SearchBar;
