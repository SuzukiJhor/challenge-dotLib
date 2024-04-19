import MedicineProvider from '../context/medicinesProvider';
import SearchBar from '../components/searchBar';
import MedicineList from '../components/medicineList';
import DarkMode from '../components/darkmode/DarkMode';

const Dashboard = ()=>{

    return (
    <>
    <MedicineProvider>
        <SearchBar/>
        <DarkMode />
        <MedicineList/>
    </MedicineProvider>
    </>
    )
}
export default Dashboard;
