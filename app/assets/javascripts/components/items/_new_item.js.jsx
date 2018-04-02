class NewItem extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			inputName: '',
			intputDescription: '' 
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		console.log("Event: " + event);
		this.setState({name: event.target.inputName, description: event.target.inputDescription});
	}

	handleSubmit(event) {
		alert('Content... name: ' + this.state.name + ", description: " + this.state.description);
		event.preventDefault();

	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Name:
					<input type="text" value={this.state.inputName} onChange={this.handleChange}/>
				</label>
				<label>description:
					<input type="text" value={this.state.inputDescription} onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Add Item" />
			</form>
		);
	}
}