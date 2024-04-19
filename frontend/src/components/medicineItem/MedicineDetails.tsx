import React from 'react';

interface MedicineDetailsProps {
  name?: string;
  published_at?: string;
  company?: string;
  formatDate: (dateString: string) => string;
}

const MedicineDetails = ({ name, published_at, company, formatDate }:MedicineDetailsProps) => {
  return (
    <>
      <p>Nome: <span>{name}</span></p>
      <p>Publicado em: <span>{published_at && formatDate(published_at)}</span></p>
      <p>Fabricado por: <span>{company}</span></p>
    </>
  );
};

export default MedicineDetails;
