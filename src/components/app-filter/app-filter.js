import './app-filter.css'

const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: "All employees" },
        { name: 'increase', label: "Employees for promotion" },
        { name: 'moreThen1000', label: "Salary is more than $1000" },
    ];


    const buttons = buttonsData.map(({ name, label }) => {
        return (
            <button
                type='button'
                className='btn btn-dark'
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}


export default AppFilter;