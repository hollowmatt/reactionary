class NewItem extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			inputName: '',
			inputDescription: '' 
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
	}

	handleSubmit(event) {
		alert('Content... name: ' + this.state.inputName + ", description: " + this.state.inputDescription);
		$.ajax({ 
			url: '/api/v1/items', 
			type: 'POST', 
			data: { 
				item: { 
					name: this.state.inputName, 
					description: this.state.inputDescription 
				} 
			}, 
			success: (response) => { 
				console.log('it worked!', response); 
			} 
		});
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Name:
					<input type="text" name="inputName" value={this.state.inputName} onChange={this.handleChange}/>
				</label>
				<label>description:
					<input type="text" name="inputDescription" value={this.state.inputDescription} onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Add Item" />
			</form>
		);
	}
}
