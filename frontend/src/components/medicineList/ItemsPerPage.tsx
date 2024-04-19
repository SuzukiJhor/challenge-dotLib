import '../../styles/components/itemsPerPage.sass'

interface ItemsPerPageSelectorProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

const ItemsPerPageSelector = ({ itemsPerPage, setItemsPerPage }:ItemsPerPageSelectorProps) => {
  return (
    <div className="indice-per-page">
      <span>Itens por página:</span>
      <br/>
      <br/>
      <select
        className="select-custom"
        value={itemsPerPage}
        onChange={e => setItemsPerPage(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
      </select>
    </div>
  );
};

export default ItemsPerPageSelector;
