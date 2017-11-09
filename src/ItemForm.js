import React, { Component } from 'react';

class ItemForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: "",
            cost: ""
        };
    }
    render() {
        return (
            <form className="ItemForm" onSubmit={this.handleSubmit.bind(this)}>
                <h2>What do you NEED</h2>
                <p>

                </p>
                <p>
                    <label>I NEED to buy...</label>
                    <input value={this.state.item} onChange={this.handleItemChange.bind(this)}/>
                </p>
                <p>
                    <label>It costs...</label>
                    <input type="cost" value={this.state.cost} onChange={this.handleCostChange.bind(this)}/>
                </p>
                <p className="Buy">
                    <button type="submit">Click to add item</button>
                </p>
            </form>
        );
    }

    handleItemChange(event) {
        this.setState({
            item: event.target.value
        });
    }
    handleCostChange(event) {
        this.setState({
            cost: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            item: this.state.item,
            cost: this.state.cost,
        });
        this.setState({
            item: "",
            cost: "",

        })
    }

}

export default ItemForm;
