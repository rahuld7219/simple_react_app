import react, {Component} from 'react';

class Form extends Component
{
	initialState = { 
	// why setting initial state to empty object {} gives
	// Warning: A component is changing an uncontrolled input to be controlled.??????
		name: '',
		role: ''
	};// why not const initialState? is it predefined?

	state = this.initialState;

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	}

	submitForm = (event) => {
		event.preventDefault();
		for(let i=0; i<Object.values(this.state).length; i++)
			if(Object.values(this.state)[i]==='')
			{
				return alert("Please fill both Name and Role");
			}
		this.props.addEmp(this.state);
		this.setState(this.initialState);
	}

	render()
	{
		const { name, role } = this.state;
		return (
			<form>
				<label htmlFor="name">Name</label>
				<input 
					type="text" 
					name="name"
					id="name"
					value={name} 
					onChange={this.handleChange}
				/>
				<label htmlFor="role">Role</label>
				<input
					type="text"
					name="role"
					id="role"
					value={role}
					onChange={this.handleChange}
				/>
				<input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form;