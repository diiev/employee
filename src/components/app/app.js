
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
import EmployerList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css'
function App () {
    const data = [
        {name: 'Муслим' , salary: 500000, increase: true, id: 1},
        {name: 'Рамзан' , salary: 57000, increase: true, id: 2},
        {name: 'Рустам' , salary: 52000, increase: false, id: 3},
        {name: 'Абу' , salary: 30000, increase: false, id: 4},
        {name: 'Тимур' , salary: 30000, increase: true, id: 5},
        {name: 'Абдул-Азиз' , salary: 30000, increase: true, id: 6},
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/> 
                <AppFilter/>
            </div> 
      
            <EmployerList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}


export default App;