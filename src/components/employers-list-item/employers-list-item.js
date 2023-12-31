import './employers-list-item.css'

const EmployerListItem = ({name,salary, increase}) => {
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames+= ' increase';
  }
 
    return (
          <li className= {classNames} >
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' руб.'} />
            <div className="d-flex justify-content-center align-items-center">
                <button 
                className="btn-cookie btn-sm"
                type="button">
                  <i className="fa-solid fa-cookie-bite"></i>
                </button> 
                <button 
                className="btn-trash btn-sm"
                type="button">
                   <i className="fa-solid fa-trash"></i>
                </button>
            </div>
          </li>
    )
}

export default EmployerListItem;

