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
				<Form addEmp={this.addEmp}/>
				<Table empData={this.state.employees} removeEmp={this.removeEmp}/>
			</div>
			);
	}
}

export default App;