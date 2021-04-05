import React, { Component } from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Role</th>
			</tr>
		</thead>
	);
}

const TableBody = (props) => {
	const rows = props.empData.map( (item, index) => {
			return (
				<tr key={index}>
					<td>{item.name}</td>
					<td>{item.role}</td>
					<td>
						<button onClick={() => props.removeEmp(index)}>Delete</button>
					{/*as we need to pass index here,
					 so the onClick function must pass through a function that returns the removeEmp() method,
					 otherwise it will try to run automatically. ???????????*/}
					</td>
				</tr>
			);
		});
	return (
		<tbody>{rows}</tbody>
	);
}

function Table(props) //is component and file name has to be same?
{
	const { empData, removeEmp } = props;
	return (
		<table>
			<TableHeader />
			<TableBody empData={empData} removeEmp={removeEmp}/>
		</table>
	);
}

export default Table; //is this has to be file name or exporting class/function/etc name 