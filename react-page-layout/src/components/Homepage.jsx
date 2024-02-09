import EmployeeList from "./EmployeeList"
import Header from "./Header";
import SearchBar from "./SearchBar";

const Homepage = ({ data }) => { 
    return (
        <div className="home-page">
            <Header title='Employee Directory'/>
            <SearchBar />
            <EmployeeList data={data} />
        </div>
    );
};

export default Homepage