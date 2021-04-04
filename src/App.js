import React, { Component } from 'react';
import Table from './Table';

class App extends Component
{
	state = {
		employees: [
			{
				name: "Tushar",
				role: "CEO",
			},
			{
				name: "Rahul",
				role: "CTO",
			},
			{
				name: "Piyush",
				role: "CFO",
			},
			{
				name: "Tania",
				role: "HR",
			},
		],
	};

	removeEmp = (index) => {
		const { employees } = this.state;
		const updatedEmp = employees.filter( (emp,i) => {
			return i !== index;
		});

		this.setState( {employees: updatedEmp} );
	}

	render()
	{
		return (
			<div className="container">
				<Table empData={this.state.employees} removeEmp={this.removeEmp}/>
			</div>
			);
	}
}

export default App;