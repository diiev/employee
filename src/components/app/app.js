
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
import EmployerList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css'
function App () {
    const data = [
        {name: 'Рамзан' , salary: 57000, increase: true},
        {name: 'Рустам' , salary: 52000, increase: false},
        {name: 'Абу' , salary: 30000, increase: false},
        {name: 'Тимур' , salary: 30000, increase: true},
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