import { Component } from "react";
import "./employees-add-form.css"


class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {

        const { name, salary } = this.state

        return (
            <div className="app-add-from">
                <h3>Add a new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-name form-control new-post-lable"
                        placeholder="Name"
                        onChange={this.onValueChange}
                        name="name"
                        value={name}
                    />

                    <input
                        type="number"
                        className="form-salary form-control new-post-lable"
                        placeholder="Salary"
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                    />

                    <button
                        type="submit"
                        className="btn btn-dark">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </form>
            </div>
        )
    }
}


export default EmployeesAddForm;