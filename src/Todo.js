import React from 'react';

class TodoForm extends React.Component {
  
  state = { name: '' }

  // Handles changes in input field, 
  // one character change at a time, instantly
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  // Prevents the form from refreshing the page,
  // while still allowing form error handling
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }
  
  render() {

    const { name } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
      <input 
        value={name} 
        name="name"
        onChange={this.handleChange}
        required 
        placeholder="Add An Item" 
      />
    </form>
    )
  }
}

export default TodoForm;