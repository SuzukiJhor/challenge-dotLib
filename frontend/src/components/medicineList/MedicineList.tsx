import React, { useState, useEffect } from 'react';
import MedicineItem from '../medicineItem/MedicineItem';

import useMedicineListContext from '../../services/useMedicineListContext';
import "../../styles/components/medicineList.sass";
import Pagination from '../pagination/Pagination';
import ItemsPerPageSelector from './ItemsPerPage';

const MedicineList = () => {
    const { data } = useMedicineListContext();

    const [loading, setLoading] = useState(true);
    const [medicinesData, setMedicinesData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); 

    const hasMedicines = medicinesData.length > 0;
    const sortedMedicines = medicinesData.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    const pages = Math.ceil(sortedMedicines.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = sortedMedicines.slice(startIndex, endIndex);

    useEffect(() => {
        if (data) {
            setMedicinesData(data);
            setLoading(false);
        }
    }, [data]);

    return (
        <>
            {hasMedicines && <ItemsPerPageSelector itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />}
            
            <div className="medicine-list-container">
                {loading ? (
                    <div className="loading-message">Loading...</div>
                ) : (
                    <>
                        <h1 className="medicine-list-title">
                            {hasMedicines ? 'Lista de Medicamentos' : 'Nenhum medicamento encontrado.'}
                        </h1>
                        {hasMedicines && (
                            <ul className="medicine-list">
                                {currentItems.map((item, index) => (
                                    <MedicineItem medicine={item} key={index} />
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
        
            <Pagination currentPage={currentPage} totalPages={pages} onPageChange={setCurrentPage} />
        </>
    );
}

export default MedicineList;
