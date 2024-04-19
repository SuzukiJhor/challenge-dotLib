

interface Document {
  id: string | number;
  url: string;
  type: string;
}

interface DocumentListProps {
  documents: Document[];
  onDownload: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DocumentList = ({ documents, onDownload }:DocumentListProps) => {
  return (
    <>
      <h3>Clique para fazer o download:</h3>
      <ul className="documents">
        {documents.map(doc => (
          <li key={doc.id}>
            <button className="btn-pdf" value={doc.url} onClick={onDownload}>
              Download File {doc.type}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DocumentList;
