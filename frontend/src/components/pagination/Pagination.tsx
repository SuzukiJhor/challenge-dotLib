import '../../styles/components/pagination.sass';

import PageButtons from './PageButtons';

interface PaginationProps  {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }:PaginationProps) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination-container">
      {totalPages > 0 && (
        <>
          <button
            className="pagination-button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>

          <PageButtons 
            totalPages={totalPages} 
            currentPage={currentPage} 
            onPageChange={handlePageChange} 
          />

          <button
            className="pagination-button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Próximo
          </button>
        </>
      )}
    </div>
  );
};


export default Pagination;
