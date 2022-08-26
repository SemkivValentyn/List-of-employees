import React from 'react';
import './app-info.css'

const AppInfo = ({employees,increast}) => {

    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {employees} </h2>
            <h2>Will receive the award: {increast} </h2>
        </div>
    );
}


export default AppInfo;
