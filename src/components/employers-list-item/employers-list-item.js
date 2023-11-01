import './employers-list-item.css'

const EmployerListItem = () => {
    return (
          <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">Vasya Pupkin</span>
            <input type="text" className="list-group-item-input" defaultValue="50 000 руб" />
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

