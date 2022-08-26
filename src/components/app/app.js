import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css'


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Max Shepart", salary: 950, increase: false, id: 1 },
                { name: "Alex Smith", salary: 800, increase: false, id: 2 },
                { name: "Steven Dep", salary: 1200, increase: false, id: 3 },
            ],
            term: '',
            filter: 'all'
        }

        this.maxId = 4;
    }


    


    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }

        if (name.length !== 0 && salary.length !== 0) {
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        } else {
            return alert("Enter the employees name and his salary")
        }


    }


    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item;
            })
        }))
    }


    SearchEmplouees = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }


    filterPost = (items, filter) => {
        switch (filter) {
            case 'increase':
                return items.filter(item => item.increase);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }


    render() {

        const { data, term, filter } = this.state
        const employees = this.state.data.length;
        const increast = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.SearchEmplouees(data, term), filter);


        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increast={increast}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                />

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}
export default App;