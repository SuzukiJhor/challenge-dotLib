
import '../../styles/components/medicineItem.sass';
import MedicineDetails from './MedicineDetails';
import ActivePrinciples from './ActivePrinciples';
import DocumentList from './DocumentList';

interface Principle {
  id: string | number;
  name: string;
}

interface Document {
  id: string | number;
  url: string;
  type: string;
}

interface Medicine {
  name?: string;
  published_at?: string;
  company?: string;
  active_principles?: Principle[];
  documents?: Document[];
}

interface MedicineItemProps {
  medicine: Medicine;
}

const MedicineItem = ({ medicine }:MedicineItemProps) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const downloadFileAtURL = (event) => {
    const url = event.currentTarget.value;
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.download = fileName;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <li className="medicine-item">
      <MedicineDetails 
        name={medicine.name} 
        published_at={medicine.published_at} 
        company={medicine.company} 
        formatDate={formatDate}
      />
      {medicine.active_principles && medicine.active_principles.length > 0 && (
        <ActivePrinciples principles={medicine.active_principles} />
      )}
      {medicine.documents && medicine.documents.length > 0 && (
        <DocumentList documents={medicine.documents} onDownload={downloadFileAtURL} />
      )}
    </li>
  );
};

export default MedicineItem;
