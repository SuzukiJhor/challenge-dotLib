import '../../styles/components/renderPageButtons.sass'

interface PageButtonsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageButtons = ({ totalPages, currentPage, onPageChange }: PageButtonsProps) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        className={`pagination-button ${currentPage === i ? 'active' : ''}`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }
  return <>{pages}</>;
};

export default PageButtons;
