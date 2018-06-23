import React, {Component} from "react";
import ToDoItems from "./ToDoItems";
import "./ToDo.css"

class ToDo extends Component {
	constructor(props){
		super(props);

		this.state = {
			items: []
		}; 

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}


	addItem(e){
		if(this.inputElement !== ""){ 
			var newItem = {
				text: this.inputElement.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return{
					items: prevState.items.concat(newItem)
				};
			});
		}

		this.inputElement.value = "";
		console.log(this.state.items);
		e.preventDefault();
	}


	deleteItem(key){
		var filteredItems = this.state.items.filter(function(item){
			return(item.key !== key)
		});

		this.setState({
			items: filteredItems
		});
	};



	render(){
		return(
			<div className="mainList">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this.inputElement = a}	
						placeholder="enter task">
						
						</input>
						<button type="submit">add
						</button>
					</form>
				</div>
				<ToDoItems entries={this.state.items}
							delete={this.deleteItem}
				/>
			</div>
		);
	}
}

export default ToDo; 