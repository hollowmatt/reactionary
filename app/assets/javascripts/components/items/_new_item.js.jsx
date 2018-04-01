class NewItem extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			name: '',
			description: '' 
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({name: event.target.name, description: event.target.description});
	}

	handleSubmit(event) {
		event.preventDefault();
		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: { item: { name: this.state.name, description: this.state.description } },
			success: (response) => {
				console.log('it worked', response);
			}
		});
	}

	render() {
		return(
			<form on Submit={this.handleSubmit}>
				<label>Name:
					<input type="text" value={this.state.name} placeholder='Enter the name of the item' onChange={this.handleChange} />
				</label>
				<label>description:
					<input type="text" value={this.state.description} placeholder='Enter a description' onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Add Item" />
			</form>
		);
	}
}