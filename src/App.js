import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component
{
	state = {//why not this.state?
		employees: [],
	};

	removeEmp = (index) => {
		const { employees } = this.state;
		const updatedEmp = employees.filter( (emp,i) => {
			return i !== index;
		});

		this.setState( {employees: updatedEmp} );
	}

	addEmp = (emp) => {
		this.setState( { employees: [...this.state.employees, emp] } );
	}

	render()
	{
		return (
			<div className="container">
				<h1>Simple React App</h1>
                <p>Add a new entry with a name and a job to the table.</p>
				<Form addEmp={this.addEmp}/>
				<Table empData={this.state.employees} removeEmp={this.removeEmp}/>
			</div>
			);
	}
}

export default App;