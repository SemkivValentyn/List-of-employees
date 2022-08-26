
import './employees-list-item.css'


const EmployeesListItem = (props) => {


    const { name, salary, onDelete, onToggleIncrease, increase } = props

    let classNames = "list-group-item d-flex justify-content-between"

    if (increase) {
        classNames += ' increase'
    }


    return (
        <li className={classNames}>
            <span className="list-group-item-lable">{name}</span>

            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />

            <div className="d-flex justify-content-center aling-items-center">
                <button
                    type="button"
                    className="btn btn-dark btn-sm"
                    onClick={onToggleIncrease}>
                    <i className="fa-solid fa-star" ></i>
                </button>
                <button
                    type="button"
                    className="btn btn-dark btn-sm"
                    onClick={onDelete}>
                    <i className="fa-solid fa-trash" ></i>
                </button>
            </div>
        </li>
    )
}



export default EmployeesListItem;